<template>
  <v-row class="d-flex w-100 mt-2">
    <v-card class="w-100">
      <v-card-text>
        <v-row class="">
          <v-col>
            <h2>
              You answered:
              <span :style="{ color: percentageColor }"
                >{{ result.correct_answers }}%</span
              >
              correctly
            </h2>
            <p class="mt-2">You can check your answers below.</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="mt-2 mb-1">Question Details:</p>
            <v-expansion-panels>
              <v-row
                v-for="(answer, id) in result.Answers"
                :key="id"
                class="d-flex w-100"
              >
                <v-col cols="11" class="">
                  <v-expansion-panel>
                    <v-expansion-panel-title>{{
                      answer.question_text
                    }}</v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-row>
                        <v-col>Your Answer:</v-col>
                        <v-col>{{ answer.option_text_from_frontend }}</v-col>
                        <v-col>Correct Answer:</v-col>
                        <v-col> {{ answer.option_text_from_backend }}</v-col>
                      </v-row>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-col>
                <v-col cols="1" class="d-flex align-top justify-end mt-2">
                  <v-btn
                    disabled
                    icon
                    color="teal-darken-3"
                    size="x-small"
                    v-if="answer.correct"
                  >
                    <v-icon round>mdi-check</v-icon>
                  </v-btn>
                  <v-btn
                    disabled
                    icon
                    color="red-darken-4"
                    size="x-small"
                    v-else
                  >
                    <v-icon round>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-row class="d-flex w-100 mt-2 justify-end" v-if="props.showButtons">
      <v-col cols="2">
        <v-btn class="w-100" color="primary" @click="finishReview">
          Finish review
        </v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  result: {
    type: Object,
    required: true,
  },
  showButtons: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const emit = defineEmits(["finishReview"]); // Define event emitter

// Function to emit event when "Finish review" is clicked
const finishReview = () => {
  console.log(props.result);
  emit("finishReview"); // Emit event with no data, or you can add data if needed
};

// Computed property to determine the color based on correct answers
const percentageColor = computed(() => {
  const correctPercentage = props.result.correct_answers;
  if (correctPercentage >= 66.67) {
    return "#00695C"; // High percentage, use green
  } else if (correctPercentage >= 33.34) {
    return "#FFB74D"; // Medium percentage, use orange
  } else {
    return "#D32F2F"; // Low percentage, use red
  }
});

// Computed property to determine the color based on correct answers
</script>
<style scoped></style>
