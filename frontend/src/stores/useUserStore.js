import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || {
      username: null,
      role: null,
    }, // Load from localStorage or default
  }),
  actions: {
    setUser(user) {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user)); // Save user data to localStorage
    },
    getUser() {
      return this.user;
    },
    clearUser() {
      this.user = { username: null, role: null };
      localStorage.removeItem("user"); // Remove user data from localStorage
    },
    isLoggedIn() {
      return this.user.username !== null && this.user.role !== null; // Check if the user is logged in
    },
  },
});
