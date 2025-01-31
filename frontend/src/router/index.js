import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
import { useUserStore } from "@/stores/useUserStore"; // Import your store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const loggedIn = userStore.isLoggedIn(); // Check if the user is logged in
  const role = userStore.getUser().role; // Check if the user is logged in
  // If the user is not logged in and trying to access any route except the login page, redirect to the login page
  if (!loggedIn && to.path == "/login") {
    next(); // Redirect to the login page
  } else if (!loggedIn && to.path !== "/login") {
    next("/login");
  } else if (role !== 1 && to.path !== "/run") {
    next("/run");
  } else {
    next();
  }
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
