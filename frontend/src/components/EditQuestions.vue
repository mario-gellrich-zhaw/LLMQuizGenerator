<template>
  <v-expansion-panels class="mb-6">
    <v-row class="w-100">
      <v-col cols="12" class="w-100">
        <!-- Display quiz title -->
        <v-text-field
          variant="outlined"
          clearable
          v-model="questionsStore.title"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      v-for="(question, index) in questionsStore.questions"
      :key="index"
      class="mt-2 w-100"
    >
      <v-col cols="11">
        <v-expansion-panel bg-color="grey-darken-3">
          <v-expansion-panel-title
            expand-icon="mdi-menu-down"
            color="grey-darken-3"
          >
            {{ question.question }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <!-- Display question text field -->
            <p class="mb-3">
              <strong>Question:</strong>
              <v-text-field
                v-model="questionsStore.questions[index].question"
                clearable
              ></v-text-field>
            </p>

            <p class="mb-3"><strong>Topic:</strong> {{ question.topic }}</p>

            <!-- Display options text fields -->
            <p class="mb-3"><strong>Options:</strong></p>
            <v-text-field
              v-for="(option, optIndex) in question.options"
              :key="optIndex"
              v-model="questionsStore.questions[index].options[optIndex].option"
              variant="outlined"
              clearable
              class="w-100"
            ></v-text-field>

            <p class="mb-3"><strong>Answer:</strong></p>
            <v-text-field
              v-model="questionsStore.questions[index].answer"
              variant="outlined"
              clearable
              class="w-100"
            ></v-text-field>
            <div v-if="question.code">
              <p class="mb-3"><strong>Code:</strong></p>
              <v-text-field
                v-model="questionsStore.questions[index].code"
                variant="outlined"
                clearable
                class="w-100"
              ></v-text-field>
              <CodeHighlight :code="question.code" />
            </div>
            <p class="mb-3"><strong>Image:</strong></p>
            <v-row v-if="question.image_url">
              <v-col cols="12" class="w-100">
                <v-img
                  :src="'http://localhost:5000' + question.image_url"
                  max-height="400"
                  width="100%"
                ></v-img
              ></v-col>
              <v-col class="d-flex justify-start align-end">
                <v-btn
                  color="red-lighten-2"
                  class="w-10"
                  @click="deleteImage(question.image_url, index)"
                  >Delete Image</v-btn
                ></v-col
              >
            </v-row>
            <!-- Upload Image Component -->
            <UploadImage
              v-else
              :existingImageUrl="question.imageUrl"
              @image-changed="updateImageDetails(index, $event)"
            />
          </v-expansion-panel-text> </v-expansion-panel></v-col
      ><v-col cols="1" class="d-flex align-top justify-center mt-1"
        ><v-btn
          color="red-lighten-2"
          class="w-50"
          @click="deleteQuestion(index)"
          ><v-icon icon="mdi-delete" color="white"></v-icon></v-btn
      ></v-col>
    </v-row>
    <!-- Loop over questions and create an expansion panel for each one -->

    <!-- Button to add a new empty question -->
    <v-row>
      <v-col class="d-flex justify-end mt-4">
        <v-btn color="secondary" @click="addEmptyQuestion">Add Question</v-btn>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script setup>
import { useQuestionsStore } from "@/stores/useQuestionsStore";

// Access the questions store
const questionsStore = useQuestionsStore();

// Function to add an empty question
const addEmptyQuestion = () => {
  questionsStore.questions.push({
    question: "",
    topic: "",
    options: [
      { option: "" },
      { option: "" },
      { option: "" },
      { option: "" },
      { option: "" },
    ],
    answer: "",
    code: null,
  });
};

const deleteImage = async (url, index) => {
  console.log(`Deleting image at URL: ${url}`);

  try {
    const response = await fetch("http://127.0.0.1:5000/deleteImage", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Image deleted successfully:", data);
      removeURL(index);
    } else {
      const errorData = await response.json();
      console.error("Failed to delete image:", errorData);
    }
  } catch (error) {
    console.error("An error occurred while deleting the image:", error);
  }
};

const deleteQuestion = (id) => {
  questionsStore.deleteQuestion(id);
};

// Method to handle the emission of image URL and file
const updateImageDetails = (index, file) => {
  // Update the image URL and file for the specific question
  questionsStore.questions[index].image_file = file;
};

const removeURL = (index) => {
  // Update the image URL and file for the specific question
  questionsStore.questions[index].image_url = null;
  questionsStore.questions[index].image_file = null;
};
</script>

<style scoped>
/* Add any dialog specific styling here */
</style>
