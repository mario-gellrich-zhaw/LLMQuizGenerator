<template>
  <div>
    <h1 class="mb-3">Run</h1>

    <!-- Loader while quizzes are loading -->
    <div v-if="loading" class="d-flex align-center justify-center">
      <v-progress-circular color="blue-lighten-3" :size="66" indeterminate />
    </div>
    <div v-else>
      <!-- Display alert if no published quizzes and quizzes are loaded -->
      <div
        v-if="quizzes.length === 0 && !loading"
        class="d-flex align-center justify-center"
      >
        <v-alert type="warning">{{ errorMessage }} </v-alert>
      </div>

      <!-- Display the quizzes if they exist -->
      <div v-else>
        <div v-if="!runQuizStore.quiz">
          <v-row v-for="quiz in quizzes" :key="quiz.quiz_id">
            <v-col cols="11">
              <v-card :title="quiz.title"></v-card>
            </v-col>
            <v-col cols="1" class="d-flex align-center justify-center">
              <!-- Run button to set quiz in RunQuizStore -->
              <v-btn color="secondary" @click="run(quiz)">
                <v-icon icon="mdi-play" />
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <RunQuiz @cancel="cancelRun" @finish="finishRun" />
        </div>
      </div>
      <!--History display-->
      <div v-if="!running">
        <v-row class="mt-5"
          ><v-col cols="12"><h3>History</h3></v-col></v-row
        >
        <v-row v-if="quizHistory.length === 0"
          ><v-col
            ><v-alert type="info"> {{ historyErrorMessage }} </v-alert></v-col
          ></v-row
        >
        <v-row v-else>
          <v-col>
            <v-expansion-panels flat>
              <v-expansion-panel
                v-for="(quiz, idx) in quizHistory"
                :key="idx"
                class="mb-2"
              >
                <v-expansion-panel-title>
                  <v-row
                    ><v-col>Title: {{ quiz.quiz_title }}</v-col
                    ><v-col>Run Date: {{ quiz.created_at }}</v-col
                    ><v-col>Result: {{ quiz.correct_answers }}%</v-col></v-row
                  >
                </v-expansion-panel-title>
                <v-expansion-panel-text
                  ><ShowResult :result="quiz" :showButtons="false"
                /></v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels> </v-col
        ></v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useQuizzesStore } from "@/stores/useQuizzesStore"; // Import the quizzes store
import { useRunQuizStore } from "@/stores/runQuizStore"; // Import the run quiz store
import { useUserStore } from "@/stores/useUserStore";

// Get the quizzes store
const quizzesStore = useQuizzesStore();

// Get the RunQuizStore
const runQuizStore = useRunQuizStore();

// Reactive variable to store quizzes
const quizzes = ref(quizzesStore.quizzes);

// Loading state for quizzes
const loading = ref(true);
const errorMessage = ref(true);

// Loading state for history
const historyErrorMessage = ref(true);
const quizHistory = ref([]);
const running = ref(false);

const userStore = useUserStore();

// Watcher for quizzesStore.quizzes to re-calculate quizzes
watch(
  () => quizzesStore.quizzes,
  (newQuizzes) => {
    quizzes.value = newQuizzes;
  },
  { immediate: true } // This ensures the watcher is triggered immediately after the component is mounted
);

// Initial fetch of quizzes from the backend only if the store is empty
onMounted(async () => {
  if (userStore.user.class_id) {
    if (quizzesStore.quizzes.length === 0) {
      try {
        const response = await fetch(
          `http://localhost:5000/getAllQuizzesForRun?class_id=${userStore.user.class_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to load quizzes:", errorData.error);
          errorMessage.value = "Failed to load quizzes: " + errorData.error;
        } else {
          const data = await response.json();
          quizzesStore.setQuizzes(data); // Store the fetched quizzes in Pinia
          if (quizzesStore.quizzes.length === 0) {
            errorMessage.value =
              "No published quizzes for this class. Please contact your teacher.";
          }
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        errorMessage.value = "Error fetching quizzes: " + error;
      }
    }
  } else if (!userStore.user.class_id && userStore.user.role === 1) {
    // get all quizzes for admin roles
    try {
      const response = await fetch("http://localhost:5000/getAllQuizzes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        errorMessage.value = "Failed to load quizzes: " + errorData.error; // Set error message
      } else {
        const data = await response.json();
        quizzesStore.setQuizzes(data); // Store fetched quizzes in Pinia
        quizzes.value = data; // Update local quizzes
      }
    } catch (error) {
      errorMessage.value = "Error fetching quizzes: " + error.message; // Set error message
    }
  } else {
    errorMessage.value =
      "You are not assigned to a class. Please contact your teacher.";
  }
  getHistory();
});

// Method to set the quiz to be run in RunQuizStore
const run = (quiz) => {
  running.value = true;
  runQuizStore.setQuiz(quiz); // Set the quiz to be run in RunQuizStore
};

const getHistory = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/get_quiz_history/${userStore.user.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to load history:", errorData.error);
      historyErrorMessage.value = "Failed to load history: " + errorData.error;
    } else {
      const data = await response.json();
      console.log(data);
      quizHistory.value = data;
      if (data.length === 0) {
        historyErrorMessage.value = "No history found for user.";
      }
    }
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    historyErrorMessage.value = "Error fetching history: " + error;
  }
  // Set loading to false after the quizzes are fetched
  loading.value = false;
};
const cancelRun = () => {
  running.value = false;
  runQuizStore.reset(); // Clear the quiz from RunQuizStore
};

const finishRun = () => {
  running.value = false;
  loading.value = true;
  runQuizStore.reset();
  getHistory(); // Clear the quiz from RunQuizStore
};
</script>
