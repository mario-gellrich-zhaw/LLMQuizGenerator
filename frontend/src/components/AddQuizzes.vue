<template>
  <v-card :title="className">
    <v-card-text>
      <v-row><v-col>Quizzes for class:</v-col></v-row>
      <v-row class="d-flex w-100 mb-2">
        <v-list>
          <v-list-item
            v-for="(quiz, index) in classQuizzes"
            :key="index"
            :title="quiz.title"
          ></v-list-item>
        </v-list>
      </v-row>
      <v-divider class="mb-2"></v-divider>
      <v-row class="mt-2">
        <v-col cols="12">Available quizzes:</v-col>
        <v-col cols="6" v-for="quiz in quizzes" :key="quiz.id">
          <v-card variant="tonal">
            <v-card-text>
              <v-row>
                <v-col cols="10" class="d-flex align-center">
                  {{ quiz.title }}
                </v-col>
                <v-col cols="2" class="d-flex justify-end">
                  <v-btn
                    variant="elevated"
                    color="secondary"
                    size="small"
                    @click="addQuizToClass(quiz)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="pr-6 pb-5">
      <v-row class="d-flex justify-end">
        <v-col cols="2">
          <v-btn
            variant="elevated"
            color="grey-darken-3"
            class="w-100"
            @click="$emit('cancel')"
          >
            Close
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useClassesStore } from "@/stores/useClassesStore"; // Import the store

export default {
  props: {
    classId: {
      type: Number,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    classQuizzes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      quizzes: [], // Initialize the quizzes array
    };
  },
  computed: {
    // A computed property that will get the current quizzes in the class from the store
    currentClassQuizzes() {
      const classesStore = useClassesStore();
      const classData = classesStore.classes.find(
        (c) => c.class_id === this.classId
      );
      return classData ? classData.quizzes : [];
    },
  },
  mounted() {
    // Call the API to get quizzes not in the class
    this.getQuizzesNotInClass();
  },
  methods: {
    async getQuizzesNotInClass() {
      try {
        const response = await fetch(
          `http://localhost:5000/get_all_quizzes_for_class?class_id=${this.classId}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to fetch quizzes:", errorData.error);
        } else {
          const data = await response.json();
          this.quizzes = data.quizzes;
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    },

    async addQuizToClass(quiz) {
      try {
        // Make the API call to add the quiz to the class
        const response = await fetch(
          "http://localhost:5000/add_quiz_to_class",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              class_id: this.classId,
              quiz_id: quiz.quiz_id,
            }),
          }
        );

        const result = await response.json();

        if (!response.ok) {
          console.error("Error adding quiz to class:", result.error);
          return;
        }

        // If successful, update the store and remove the quiz from the list
        const classesStore = useClassesStore();
        classesStore.addQuizToClass(this.classId, {
          quiz_id: quiz.quiz_id,
          title: quiz.title,
        });

        // Remove the quiz from the `quizzes` list
        this.quizzes = this.quizzes.filter((q) => q.quiz_id !== quiz.quiz_id);
      } catch (error) {
        console.error("Error adding quiz to class:", error);
      }
    },
  },
};
</script>
