<template>
  <div>
    <!-- Only show the textarea and button if there are no questions -->
    <div v-if="questionsStore.questions.length === 0">
      <v-row>
        <v-col cols="6" v-if="loading"
          ><v-row class="h-50"
            ><v-col class="d-flex justify-center align-center">
              <v-progress-circular
                color="blue-lighten-3"
                indeterminate
                :size="56"
              ></v-progress-circular></v-col></v-row
          ><v-row class="h-50"
            ><v-col class="d-flex justify-center"
              ><p>Loading questions...</p></v-col
            ></v-row
          ></v-col
        >
        <v-col cols="6" v-else>
          <form @submit.prevent="submit">
            <v-text-field
              label="Total number of questions:"
              v-model="totalQuestions"
              clearable
            />
            <v-text-field
              label="Questions per topic:"
              v-model="qTopics"
              clearable
            />

            <v-text-field
              label="Options per question:"
              v-model="options"
              clearable
            ></v-text-field>

            <v-text-field
              label="Difficulty from:"
              v-model="diffFrom"
              clearable
            ></v-text-field>
            <v-text-field
              label="Difficulty to:"
              v-model="diffTo"
              clearable
            ></v-text-field>
          </form>
          <v-row
            ><v-col><Topics v-model="topics" /></v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-start">
              <v-btn
                color="primary"
                class="w-33"
                @click="submitPrompt"
                :disabled="topics.length === 0"
                >Send</v-btn
              >
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <ExamplePrompt />
        </v-col>
      </v-row>
      <!-- v-textarea for input -->

      <!-- v-btn to trigger the request -->
    </div>

    <!-- Display the Questions component and pass the questions as a prop -->
    <PreviewQuestions v-else :questions="questionsStore.questions" />

    <!-- Display any error message -->
    <div v-if="errorMessage">
      <p style="color: red"><strong>Error:</strong> {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuestionsStore } from "@/stores/useQuestionsStore"; // Import the store

// loading state
const loading = ref(false);

const errorMessage = ref("");
const questionsStore = useQuestionsStore(); // Initialize the store

// prompt bindings
const totalQuestions = ref(30);
const qTopics = ref(2);
const options = ref(5);
const diffFrom = ref("advanced");
const diffTo = ref("professional");
const topics = ref([]); // Store the topics from the Topics component

// prompting flask endpoint
const submitPrompt = async () => {
  try {
    // Set loading state to true when the request is made
    loading.value = true;

    const payload = {
      totalQuestions: totalQuestions.value,
      qTopics: qTopics.value,
      options: options.value,
      diffFrom: diffFrom.value,
      diffTo: diffTo.value,
      topics: topics.value,
    };

    const response = await fetch("/sendPrompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Response from server:", data);

      // Check if the 'reply' is present and parse it as JSON
      if (data.reply) {
        const parsedReply = JSON.parse(data.reply); // Parse the reply string to a JSON object

        // Check if the parsed reply contains 'title' and 'questions'
        if (
          parsedReply &&
          parsedReply.title &&
          Array.isArray(parsedReply.questions)
        ) {
          const quizData = {
            title: parsedReply.title,
            questions: parsedReply.questions,
          };

          // Set the quiz data in the store
          questionsStore.setQuiz(quizData);

          errorMessage.value = ""; // Clear any previous error messages
        } else {
          throw new Error("Invalid response format.");
        }
      } else {
        throw new Error("No 'reply' field found in the response.");
      }
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error while submitting prompt:", error.message);
    errorMessage.value = error.message;
    questionsStore.clearQuiz(); // Clear questions on error
  } finally {
    // Set loading to false after request completes (success or failure)
    loading.value = false;
  }
};
</script>
<style scoped></style>
