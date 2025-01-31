// stores/useQuestionsStore.js
import { defineStore } from "pinia";

export const useQuestionsStore = defineStore("questions", {
  state: () => ({
    title: "", // This will hold the title of the quiz
    questions: [], // This will hold the questions for the quiz
  }),
  actions: {
    setQuiz(newQuiz) {
      this.title = newQuiz.title; // Set the quiz title
      this.questions = newQuiz.questions; // Set the questions for the quiz
    },
    clearQuiz() {
      this.title = ""; // Clear the quiz title
      this.questions = []; // Clear the quiz questions
    },
    deleteQuestion(index) {
      this.questions.splice(index, 1);
    },
    reset() {
      this.title = ""; // Clear the title
      this.questions = []; // Clear the questions
    },
  },
});
