<template>
  <div>
    <h1 class="mb-3">Quizzes</h1>

    <!-- Loader -->
    <div class="d-flex justify-center align-center loader" v-if="isLoading">
      <v-progress-circular
        color="blue-lighten-3"
        indeterminate
        :size="56"
      ></v-progress-circular>
    </div>

    <!-- Error Message -->
    <div
      v-if="!isLoading && errorMessage"
      class="d-flex justify-center align-center"
    >
      <v-alert type="error">{{ errorMessage }}</v-alert>
    </div>

    <!-- Quizzes -->
    <Quiz v-else v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" class="" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useQuizzesStore } from "@/stores/useQuizzesStore"; // Import the store

// Get the quizzes store
const quizzesStore = useQuizzesStore();

// Reactive variables
const quizzes = ref(quizzesStore.quizzes); // Store quizzes locally
const isLoading = ref(false); // Track loading state
const errorMessage = ref(""); // Track error messages

// Fetch quizzes from the backend if the store is empty
onMounted(async () => {
  if (quizzesStore.quizzes.length === 0) {
    isLoading.value = true; // Start loader
    errorMessage.value = ""; // Reset error message

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
    } finally {
      isLoading.value = false; // Stop loader
    }
  }
});

// Watch for changes in the quizzes store and update the quizzes ref accordingly
watch(
  () => quizzesStore.quizzes,
  (newQuizzes) => {
    quizzes.value = newQuizzes; // Update local quizzes
  }
);
</script>

<style scoped>
.loader {
  min-height: 500px;
}
</style>
