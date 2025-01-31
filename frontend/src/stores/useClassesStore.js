import { defineStore } from "pinia";

export const useClassesStore = defineStore("classes", {
  state: () => ({
    classes: [], // This will hold all the classes
  }),
  actions: {
    addClass(newClass) {
      this.classes.push(newClass);
    },
    setClasses(data) {
      this.classes = data;
    },
    getClassNames() {
      return this.classes.map((classItem) => classItem.class_name); // Return the class names
    },
    // New action to add a user to a class
    addUserToClass(classId, user) {
      const classIndex = this.classes.findIndex(
        (classItem) => classItem.class_id === classId
      );

      if (classIndex !== -1) {
        const classData = this.classes[classIndex];

        const userExists = classData.users.some(
          (u) => u.user_id === user.user_id
        );
        if (!userExists) {
          classData.users.push({
            user_id: user.user_id,
            username: user.username,
          });
        }
      }
    },

    // New action to add a quiz to a class
    addQuizToClass(classId, quiz) {
      console.log(classId);
      const classIndex = this.classes.findIndex(
        (classItem) => classItem.class_id === classId
      );

      if (classIndex !== -1) {
        const classData = this.classes[classIndex];

        const quizExists = classData.quizzes.some(
          (u) => u.quiz_id === quiz.quiz_id
        );
        if (!quizExists) {
          classData.quizzes.push({
            quiz_id: quiz.quiz_id,
            title: quiz.title,
          });
        }
      }
    },

    // Action to remove a user from a class
    removeUserFromClass(classId, userId) {
      const classIndex = this.classes.findIndex(
        (classItem) => classItem.class_id === classId
      );

      if (classIndex !== -1) {
        const classData = this.classes[classIndex];

        classData.users = classData.users.filter(
          (user) => user.user_id !== userId
        );
      }
    },

    // Action to remove a quiz from a class
    removeQuizFromClass(classId, quizId) {
      const classIndex = this.classes.findIndex(
        (classItem) => classItem.class_id === classId
      );

      if (classIndex !== -1) {
        const classData = this.classes[classIndex];

        classData.quizzes = classData.quizzes.filter(
          (quiz) => quiz.quiz_id !== quizId
        );
      }
    },

    // New action to remove a class
    removeClass(classId) {
      const classIndex = this.classes.findIndex(
        (classItem) => classItem.class_id === classId
      );

      if (classIndex !== -1) {
        // Remove the class from the array
        this.classes.splice(classIndex, 1);
      }
    },
    reset() {
      this.classes = []; // Clear the state
    },
  },
});
