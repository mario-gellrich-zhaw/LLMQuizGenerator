<template>
  <v-expansion-panels class="mb-6">
    <!-- Display quiz title -->
    <v-row>
      <v-col cols="12" class="w-100">
        <v-text-field
          variant="outlined"
          clearable
          v-model="quizTitle"
          @input="updateStore"
        ></v-text-field
      ></v-col>
    </v-row>

    <!-- Loop over questions and create an expansion panel for each one -->
    <v-row
      v-for="(question, index) in quizQuestions"
      :key="index"
      class="mt-2 w-100"
    >
      <v-col cols="11"
        ><v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            {{ question.question }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <!-- Display question text field -->
            <p class="mb-3">
              <strong>Question:</strong>
              <v-text-field
                v-model="question.question"
                clearable
                @input="updateStore"
              ></v-text-field>
            </p>

            <p class="mb-3"><strong>Topic:</strong> {{ question.topic }}</p>

            <!-- Display options text fields -->
            <p class="mb-3"><strong>Options:</strong></p>
            <v-text-field
              v-for="(option, optIndex) in question.options"
              :key="optIndex"
              v-model="quizQuestions[index].options[optIndex]"
              variant="outlined"
              clearable
              class="w-100"
            ></v-text-field>

            <p class="mb-3"><strong>Answer:</strong></p>
            <v-text-field
              v-model="quizQuestions[index].answer"
              variant="outlined"
              clearable
              class="w-100"
            ></v-text-field>
            <div v-if="question.code">
              <p class="mb-3">
                <strong>Code:</strong>
              </p>
              <v-text-field
                v-model="quizQuestions[index].code"
                variant="outlined"
                clearable
                class="w-100"
              ></v-text-field>
            </div>
          </v-expansion-panel-text> </v-expansion-panel
      ></v-col>
      <v-col cols="1" class="d-flex align-top mt-1"
        ><v-btn
          color="red-lighten-2"
          class="w-100"
          @click="deleteQuestion(index)"
          ><v-icon icon="mdi-delete" color="white"></v-icon></v-btn
      ></v-col>
    </v-row>

    <!-- Button to add a new empty question -->
    <v-row>
      <v-col class="d-flex justify-start mt-4">
        <v-btn color="red-lighten-2" class="w-25 mr-2" @click="backQuestions"
          >Back</v-btn
        >
      </v-col>
      <v-col class="d-flex justify-end mt-4">
        <v-btn color="secondary" class="mr-2" @click="addEmptyQuestion"
          >Add Question</v-btn
        >
        <v-btn color="primary" class="w-25" @click="saveQuestions">Save</v-btn>
      </v-col></v-row
    >
  </v-expansion-panels>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuestionsStore } from "@/stores/useQuestionsStore"; // Import the store
import { useQuizzesStore } from "@/stores/useQuizzesStore"; // Import the store

// Access the Pinia store
const questionsStore = useQuestionsStore();
const quizzesStore = useQuizzesStore();

// Initialize local state based on the store's state
const quizTitle = ref(questionsStore.title);
const quizQuestions = ref(questionsStore.questions);

// Watch for changes in the store's state and update local state accordingly
watch(
  () => questionsStore.title,
  (newTitle) => {
    quizTitle.value = newTitle;
  }
);

watch(
  () => questionsStore.questions,
  (newQuestions) => {
    quizQuestions.value = [...newQuestions];
  }
);

// Function to update the questions store
const updateStore = () => {
  questionsStore.setQuiz({
    title: quizTitle.value,
    questions: quizQuestions.value,
  }); // Update the store with the modified quiz
};

// Function to save questions to the backend
const saveQuestions = async () => {
  try {
    const response = await fetch("/saveQuestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: quizTitle.value,
        questions: quizQuestions.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to save questions:", errorData.error);
    } else {
      const data = await response.json();
      console.log("Quiz saved successfully:", data.quiz);
      quizzesStore.addQuiz(data.quiz);
      questionsStore.clearQuiz(); // Clear the store after saving
    }
  } catch (error) {
    console.error("Error saving questions:", error);
    alert("Error saving questions: " + error.message);
  }
};

// Function to add an empty question to the quiz
const addEmptyQuestion = () => {
  const emptyQuestion = {
    question: "",
    code: "",
    options: ["", "", "", ""], // Create empty options by default
    answer: "",
    topic: "",
  };
  quizQuestions.value.push(emptyQuestion);
  updateStore(); // Update the store after adding the question
};

// Function to go back to prompt
const backQuestions = () => {
  questionsStore.clearQuiz();
};

const deleteQuestion = (id) => {
  questionsStore.deleteQuestion(id);
};
</script>

<style scoped>
/* Additional styles */
</style>
