<template>
  <div>
    <h1 class="mb-3">Classes</h1>
    <EditClasses />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useClassesStore } from "@/stores/useClassesStore"; // Import the store

// Get the quizzes store
const classesStore = useClassesStore();

// Initial fetch quizzes from the backend only if the store is empty
onMounted(async () => {
  // If quizzes are already in the store, no need to fetch them again
  if (classesStore.classes.length === 0) {
    try {
      const response = await fetch("/getAllClasses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to load classes:", errorData.error);
        //alert("Failed to load quizzes: " + errorData.error);
      } else {
        const data = await response.json();
        classesStore.setClasses(data); // Store the fetched quizzes in Pinia
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  }
});
</script>
