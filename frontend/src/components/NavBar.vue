<template>
  <v-navigation-drawer>
    <v-list>
      <!-- Logout Button -->
      <v-list-item>
        <v-btn
          v-if="loggedIn"
          prepend-icon="mdi-logout"
          variant="outlined"
          color="light-green-darken-1"
          block
          @click="logout"
        >
          Logout
        </v-btn>
      </v-list-item>

      <!-- Menu Items -->
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <span v-if="role === 1">
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            value="Home"
            :to="'/'"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-menu"
            title="Quizzes"
            value="quizzes"
            :to="'/quizzes'"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Classes"
            value="classes"
            :to="'/classes'"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            value="dashboard"
            :to="'/dashboard'"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-lock"
            title="Admin"
            value="admin"
            :to="'/admin'"
          ></v-list-item>
        </span>
        <v-list-item
          prepend-icon="mdi-play"
          title="Run"
          value="run"
          :to="'/run'"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          prepend-icon="mdi-account"
          :title="user.username"
          base-color="secondary"
        ></v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import { useRunQuizStore } from "@/stores/runQuizStore";
import { useClassesStore } from "@/stores/useClassesStore";
import { useQuestionsStore } from "@/stores/useQuestionsStore";
import { useQuizzesStore } from "@/stores/useQuizzesStore";
import { computed } from "vue";
import { useRouter } from "vue-router"; // Import useRouter

const runQuizStore = useRunQuizStore();
const classesStore = useClassesStore();
const questionsStore = useQuestionsStore();
const quizzesStore = useQuizzesStore();

export default {
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    // Get the reactive value of loggedIn
    const loggedIn = computed(() => userStore.isLoggedIn());
    const role = computed(() => userStore.getUser().role);
    const user = computed(() => userStore.getUser());

    // Logout function that clears the user store
    const logout = () => {
      runQuizStore.reset();
      classesStore.reset();
      questionsStore.reset();
      quizzesStore.reset();
      userStore.clearUser();
      router.push({ path: "/login" });
    };

    return {
      loggedIn,
      logout,
      role,
      user,
    };
  },
};
</script>
