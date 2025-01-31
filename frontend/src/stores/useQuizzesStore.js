import { defineStore } from "pinia";

export const useQuizzesStore = defineStore("quizzes", {
  state: () => ({
    quizzes: [], // This will hold all the quizzes
  }),
  actions: {
    setQuizzes(newQuizzes) {
      this.quizzes = newQuizzes; // Set the quizzes array
    },
    addQuiz(newQuiz) {
      this.quizzes.push(newQuiz); // Add a new quiz to the quizzes list
    },
    clearQuizzes() {
      this.quizzes = []; // Clear all quizzes
    },
    updateQuiz(quiz_id, updatedQuiz) {
      // Find the quiz by quiz_id instead of id
      const index = this.quizzes.findIndex((quiz) => quiz.quiz_id === quiz_id);
      if (index !== -1) {
        this.quizzes[index] = updatedQuiz; // Update quiz by quiz_id
      }
    },
    removeQuiz(quiz_id) {
      // Remove quiz by quiz_id instead of id
      this.quizzes = this.quizzes.filter((quiz) => quiz.quiz_id !== quiz_id);
    },
    getQuizById(quiz_id) {
      // Retrieve a quiz by quiz_id
      return this.quizzes.find((quiz) => quiz.quiz_id === quiz_id);
    },
    getAllQuestionsForQuiz(quiz_id) {
      const quiz = this.getQuizById(quiz_id);
      return quiz ? quiz.questions : []; // Get all questions for a specific quiz
    },
    togglePublishedStatus(quiz_id) {
      const quiz = this.getQuizById(quiz_id);
      if (quiz) {
        quiz.published = !quiz.published; // Toggle the published status
      }
    },
    updateQuestionImageURL(quiz_id, question_id, image_url) {
      // Find the quiz containing the question
      const quiz = this.getQuizById(quiz_id);
      if (quiz) {
        // Find the question within the quiz
        const question = quiz.questions.find(
          (q) => q.question_id === question_id
        );
        if (question) {
          // Update the image_url for the question
          question.image_url = image_url;
        }
      }
    },
    reset() {
      this.quizzes = []; // Clear the quizzes array
    },
  },
});
