<template>
  <v-row class="d-flex">
    <!-- Published / Unpublished label -->
    <v-col cols="12" class="d-flex mt-0 pb-0">
      <p
        v-if="quiz.published"
        class="text-overline text-secondary text-small published"
      >
        published
      </p>
      <p v-else class="text-overline text-uppercase text-grey published">
        unpublished
      </p>
    </v-col>

    <!-- Quiz content -->
    <v-col cols="10 pl-0 pt-0">
      <v-list>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="`Quiz: ${quiz.title}`"
              class="title"
            ></v-list-item>
          </template>
          <v-list-group
            v-for="question in quiz.questions"
            :key="question.id"
            class="divider"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="question.question"
              ></v-list-item>
            </template>
            <v-list-item title="Options">
              <v-divider class="border-opacity-50 mt-2"></v-divider>
              <ul class="mt-2">
                <li
                  v-for="option in question.options"
                  :key="option.option_id"
                  class="pl-0 ml-4 list-item"
                >
                  {{ option.option }}
                </li>
              </ul>
              <v-divider
                class="border-opacity-50 mt-2"
                color="secondary"
              ></v-divider>
              <p class="title ml-0 mt-2">
                Answer: <span class="answer">{{ question.answer }}</span>
              </p>
              <div v-if="question.code">
                <p class="ml-0 mt-2">Code:</p>
                <CodeHighlight :code="question.code" />
              </div>
            </v-list-item>
            <v-list-item v-if="question.image_url" class="mb-2">
              <h3 class="mb-2">Image:</h3>
              <v-row>
                <v-col cols="12" class="w-100">
                  <v-img
                    :src="'' + question.image_url"
                    max-height="400"
                    width="100%"
                  ></v-img
                ></v-col>
              </v-row>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-col>

    <!-- Action buttons (Edit and Publish/Unpublish) -->
    <v-col class="align-top d-flex pt-0 mt-2" cols="2">
      <!-- Edit button to open the modal -->
      <v-btn
        class="ml-0 mr-2"
        size="large"
        color="secondary"
        @click="openEditDialog"
      >
        <v-icon icon="mdi-pencil" />
      </v-btn>

      <!-- Publish/Unpublish button -->
      <v-btn
        v-if="!quiz.published"
        class=""
        size="large"
        color="primary"
        @click="publishQuiz(quiz.quiz_id)"
      >
        <v-icon icon="mdi-share" />
      </v-btn>
      <v-btn
        v-else
        color="red-lighten-3"
        size="large"
        @click="publishQuiz(quiz.quiz_id)"
      >
        <v-icon icon="mdi-share" class="invert-vertical" />
      </v-btn>
    </v-col>
    <!-- Modal Dialog -->
    <v-dialog v-model="dialog" persistent class="w-75">
      <v-card :title="`Edit Quiz: ${quiz.title}`">
        <v-card-text>
          <!-- You can put form fields here to edit quiz details in future -->
          <EditQuestions :quiz="quiz" />
          <v-row
            ><v-alert v-if="errorMessage" type="error" class="ma-3">
              {{ errorMessage }}
            </v-alert></v-row
          >
        </v-card-text>

        <v-card-actions class="pr-6 pb-5">
          <v-row>
            <v-col cols="8" class="d-flex align-start pl-6">
              <!-- Error message display -->
              <v-btn
                variant="elevated"
                color="grey-darken-3"
                class="w-33"
                @click="deleteQuiz"
                >Delete Quiz</v-btn
              >
            </v-col>
            <v-col cols="2" class="d-flex align-center"
              ><v-btn
                @click="closeDialog"
                variant="elevated"
                color="grey-darken-3"
                class="w-100"
                >Cancel</v-btn
              > </v-col
            ><v-col cols="2" class="d-flex align-center"
              ><v-btn
                @click="saveDialog"
                variant="elevated"
                color="primary"
                class="w-100"
                >Save</v-btn
              ></v-col
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { ref } from "vue"; // Import Vue's ref function
import { useQuizzesStore } from "@/stores/useQuizzesStore"; // Import the store
import { useQuestionsStore } from "@/stores/useQuestionsStore"; // Import the store

// Receive the quiz prop
const props = defineProps({
  quiz: Object, // Accept quiz as a prop
});

const errorMessage = ref(null);

// Declare a reactive variable to control the modal visibility
const dialog = ref(false);

// Get the quizzes store
const quizzesStore = useQuizzesStore();
const questionsStore = useQuestionsStore();

// Function to handle the opening of the edit modal
const openEditDialog = () => {
  dialog.value = true; // Set dialog to true to show the modal
  questionsStore.setQuiz({
    title: props.quiz.title,
    questions: JSON.parse(JSON.stringify(props.quiz.questions)), // Deep copy
  });
};

// Function to close the dialog
const closeDialog = () => {
  dialog.value = false;
  setTimeout(() => {
    questionsStore.clearQuiz();
    errorMessage.value = null; // Set the error message to null
  }, 300); // 300ms delay before closing the modal to prevent updating visuals
};

// Function to save the dialog
const saveDialog = async () => {
  // Prepare the updated quiz data
  const updatedQuiz = {
    title: questionsStore.title,
    questions: JSON.parse(JSON.stringify(questionsStore.questions)), // Deep copy for safety
    quiz_id: props.quiz.quiz_id, // Ensure quiz_id is preserved
    published: props.quiz.published, // Preserve existing published state
  };

  try {
    // Try updating the quiz in the database
    const response = await fetch(`/updateQuiz/${props.quiz.quiz_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuiz),
    });

    if (!response.ok) {
      throw new Error("Failed to update quiz in the database");
    }

    // If database update is successful, update the store
    quizzesStore.updateQuiz(props.quiz.quiz_id, updatedQuiz);
    errorMessage.value = null; // Clear the error message

    questionsStore.questions.forEach((question) => {
      if (question.image_file) {
        const formData = new FormData();
        formData.append("image_file", question.image_file);
        formData.append("question_id", question.question_id);

        fetch("/savePicture", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.image_url) {
              // Update the store with the new image_url
              quizzesStore.updateQuestionImageURL(
                props.quiz.quiz_id,
                question.question_id,
                data.image_url
              );
            } else {
              console.error(
                "No image_url returned for question:",
                question.question_id
              );
            }
          })
          .catch((error) => {
            console.error(
              "Error uploading image for question:",
              question.question_id,
              error
            );
          });
      }
    });

    // Close the dialog and clear the quiz in the questions store
    dialog.value = false;
    questionsStore.clearQuiz();
  } catch (error) {
    // Log the error, but keep the changes in the UI intact
    console.error("Error updating quiz in the database:", error);
    errorMessage.value = error.message; // Set the error message
  }
};

// Function to handle the publishing/unpublishing of the quiz
const publishQuiz = async (quiz_id) => {
  // Call the backend to update the status in the database
  try {
    const response = await fetch(`/updateQuizStatus/${quiz_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        published: !quizzesStore.getQuizById(quiz_id).published, // Toggle the published status
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update quiz status");
    }

    const data = await response.json();
    console.log("Quiz status updated:", data);
    // Toggle the status locally in the store
    quizzesStore.togglePublishedStatus(quiz_id); // Toggle published status for the quiz
  } catch (error) {
    console.error("Error updating quiz status:", error);
  }
};

const deleteQuiz = async () => {
  const confirmation = confirm("Are you sure you want to delete this quiz?");

  if (confirmation) {
    try {
      // Step 1: Call the backend to delete the quiz from the database
      const response = await fetch(`/deleteQuiz/${props.quiz.quiz_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete quiz from the database");
      }

      // Step 2: If backend deletion is successful, remove the quiz from the store
      quizzesStore.removeQuiz(props.quiz.quiz_id);

      // Optionally, close the dialog and clear the form
      closeDialog();
    } catch (error) {
      console.error("Error deleting quiz:", error);
      errorMessage.value = error.message;
    }
  }
};
</script>

<style scoped>
.invert-vertical {
  transform: rotate(180deg);
  color: white;
}

.answer {
  color: grey;
}

.list-item {
  color: grey;
}

.title {
  color: #80cbc4;
}

.divider {
  border-top: solid 1px rgba(169, 169, 169, 0.2); /* rgba color for grey with 50% opacity */
}
</style>
