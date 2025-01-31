<template>
  <div>
    <v-row v-if="!finished">
      <h3 class="mb-3 mt-3">{{ quiz.title }}</h3>
      <v-carousel
        v-model="currentSlide"
        progress="primary"
        class="pt-2 h-100"
        hide-delimiters
        :continuous="false"
      >
        <template v-slot:prev="{ props }">
          <v-btn color="grey-darken-2" variant="elevated" @click="props.onClick"
            >Previous</v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn color="grey-darken-2" variant="elevated" @click="props.onClick"
            >Next</v-btn
          >
        </template>
        <div class="d-flex justify-center">
          <v-carousel-item
            v-for="(question, i) in quiz.questions"
            :key="i"
            class="w-75"
          >
            <p>{{ question.question }}</p>
            <v-radio-group
              v-model="question.selectedOption"
              :key="i"
              class="mt-5 ml-10"
            >
              <v-radio
                v-for="(option, idx) in question.options"
                :key="idx"
                :label="option.option"
                :value="option.option_id"
              />
            </v-radio-group>
            <div v-if="question.code">
              <p class="mt-3"><strong>Code:</strong></p>
              <CodeHighlight :code="question.code" />
            </div>
          </v-carousel-item>
        </div>
      </v-carousel>

      <!-- Show Cancel and Finish buttons -->
      <v-row class="w-100 ml-1">
        <v-col cols="6" class="d-flex justify-start">
          <v-btn color="red-lighten-1" class="w-25" @click="cancelQuiz"
            >Cancel</v-btn
          >
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn
            color="primary"
            class="w-25"
            v-if="isLastSlide"
            @click="showConfirmation"
            >Finish</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="w-100">
        <v-col>
          <v-fade-transition>
            <v-alert v-if="error" type="error">
              {{ errorMessage }}
            </v-alert>
          </v-fade-transition>
        </v-col>
      </v-row>

      <!-- Confirmation Dialog -->
      <v-dialog v-model="showDialog" persistent class="w-25">
        <v-card>
          <v-card-text class="pt-7">
            Are you sure you want to finish the quiz? Once confirmed, you cannot
            go back and change your answers.
          </v-card-text>
          <v-card-actions>
            <v-row class="d-flex ma-0">
              <v-col
                ><v-btn
                  color="red-lighten-1"
                  variant="elevated"
                  class="w-100"
                  @click="closeDialog"
                  >Cancel</v-btn
                ></v-col
              >
              <v-col
                ><v-btn
                  color="primary"
                  class="w-100"
                  variant="elevated"
                  @click="confirmFinish"
                  >Confirm</v-btn
                ></v-col
              >
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row v-else>
      <ShowResult :result="validationResult" @finishReview="emitFinish" />
    </v-row>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import { useRunQuizStore } from "@/stores/runQuizStore";
import { useUserStore } from "@/stores/useUserStore";

// Emit the cancel event
const emit = defineEmits(["cancel", "finish"]);

// Get the RunQuizStore
const runQuizStore = useRunQuizStore();
const userStore = useUserStore();

// Initialize quiz with the quiz from the store
const quiz = ref(runQuizStore.quiz);

// Make sure each question has a 'selectedOption' property to hold the selected answer
quiz.value.questions.forEach((question) => {
  question.selectedOption = null; // Initialize the selectedOption for each question
});

// Track the current slide index
const currentSlide = ref(0);

// Compute whether the user is on the last slide
const isLastSlide = computed(
  () => currentSlide.value === quiz.value.questions.length - 1
);

// Dialog visibility state
const showDialog = ref(false);

// Error message in case not all questions have been answered
const errorMessage = ref("");
const error = ref(false);

// quiz is finished
const finished = ref(false);
const validationResult = ref("");

// Show the dialog when Finish is clicked
const showConfirmation = () => {
  showDialog.value = true;
};

// Close the dialog
const closeDialog = () => {
  showDialog.value = false;
};

// Handle quiz completion
const finishQuiz = async () => {
  // Validate if all questions have a selected option
  const unansweredQuestions = quiz.value.questions.filter(
    (question) => !question.selectedOption
  );

  if (unansweredQuestions.length > 0) {
    error.value = true;
    errorMessage.value =
      "Please answer all questions before finishing the quiz.";

    // Automatically hide the error message after 3 seconds
    setTimeout(() => {
      error.value = false;
      errorMessage.value = "";
    }, 3000);

    return;
  }

  // Extract selected options along with the option_text
  const selectedOptions = quiz.value.questions.map((question) => {
    // Find the selected option by matching the selectedOption (ID)
    const selectedOption = question.options.find(
      (option) => option.option_id === question.selectedOption
    );

    return {
      quiz_id: quiz.value.quiz_id,
      question_id: question.question_id,
      option_id: question.selectedOption, // The selected option's ID
      option_text: selectedOption ? selectedOption.option : "", // Add the option text
    };
  });

  // Send the selectedOptions to the server
  try {
    // Prepare the selectedOptions object in the desired format
    const formattedData = {
      quiz_id: selectedOptions[0].quiz_id, // Assuming all questions have the same quiz_id
      user_id: userStore.user.id,
      class_id: userStore.user.class_id,
      role: userStore.user.role,
      Answers: selectedOptions.map((option) => ({
        question_id: option.question_id,
        option_id: option.option_id,
        option_text: option.option_text, // Include the option text
      })),
    };

    const response = await fetch("/validate_quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData), // Send the formatted data
    });

    if (!response.ok) {
      // Handle server errors
      const errorData = await response.json();
      console.error("Error validating quiz:", errorData);
      //alert("There was an error validating the quiz. Please try again.");
      return;
    }

    // Handle successful response
    const result = await response.json();
    validationResult.value = result;
    finished.value = true;

    //alert("Quiz submitted and validated successfully!");
  } catch (error) {
    // Handle network or other errors
    console.error("Network error:", error);
    //alert("A network error occurred. Please try again later.");
  }
};

// Confirm finishing the quiz
const confirmFinish = () => {
  showDialog.value = false; // Close the dialog
  finishQuiz(); // Call the finish quiz logic
};

// Emit the cancel event when the Cancel button is clicked
const cancelQuiz = () => {
  emit("cancel");
};

const emitFinish = () => {
  emit("finish");
};
</script>
