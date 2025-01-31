<template>
  <v-app>
    <v-container fluid>
      <NavBar v-if="loggedIn" />

      <v-main class="d-flex justify-center align-center">
        <div class="w-100 ma-10">
          <router-view />
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";
import { computed } from "vue";

export default {
  setup() {
    const userStore = useUserStore();

    // Get the reactive value of loggedIn
    const loggedIn = computed(() => userStore.isLoggedIn());

    return {
      loggedIn,
    };
  },
};
</script>

<style scoped></style>
