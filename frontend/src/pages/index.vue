<template>
  <div>
    <h1 class="mb-3">Home</h1>
    <GPTPrompt />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useQuizzesStore } from "@/stores/useQuizzesStore"; // Import the store

// Get the quizzes store
const quizzesStore = useQuizzesStore();

// Initial fetch quizzes from the backend only if the store is empty
onMounted(async () => {
  // If quizzes are already in the store, no need to fetch them again
  if (quizzesStore.quizzes.length === 0) {
    try {
      const response = await fetch("/getAllQuizzes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to load quizzes:", errorData.error);
        //alert("Failed to load quizzes: " + errorData.error);
      } else {
        const data = await response.json();
        quizzesStore.setQuizzes(data); // Store the fetched quizzes in Pinia
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      //alert("Error fetching quizzes: " + error.message);
    }
  }
});
</script>
