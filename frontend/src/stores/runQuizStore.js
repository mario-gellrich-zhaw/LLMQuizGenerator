import { defineStore } from "pinia";

export const useRunQuizStore = defineStore("runQuiz", {
  state: () => ({
    quiz: null,
  }),
  actions: {
    setQuiz(quiz) {
      this.quiz = quiz;
    },
    reset() {
      this.quiz = null;
    },
  },
});
