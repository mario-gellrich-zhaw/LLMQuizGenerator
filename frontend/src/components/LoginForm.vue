<template>
  <div @keydown="handleKeydown">
    <v-row>
      <v-col class="d-flex" cols="12">
        <v-card class="mx-auto w-75">
          <v-card-title class="logintitle pa-3 ma-0">
            <span v-if="login">Login</span>
            <span v-else>Register</span>
          </v-card-title>
          <v-container>
            <!-- Username field -->
            <v-text-field
              v-model="username"
              color="secondary"
              label="Username"
              variant="underlined"
            ></v-text-field>

            <!-- Password field -->
            <v-text-field
              v-model="password"
              color="secondary"
              label="Password"
              placeholder="Enter your password"
              variant="underlined"
              type="password"
            ></v-text-field>

            <!-- Toggle between Login and Register links -->
            <p v-if="login">
              Don't have an account?
              <v-btn
                variant="plain"
                class="ml-1 pa-0"
                size="medium"
                @click="registerUser"
                >Register</v-btn
              >
            </p>
            <p v-else>
              Back to
              <v-btn
                variant="plain"
                class="ml-1 pa-0"
                size="medium"
                @click="loginUser"
                >Login</v-btn
              >
            </p>
          </v-container>

          <!-- Action buttons for login or register -->
          <v-card-actions class="justify-end mr-2">
            <div v-if="login">
              <v-btn color="secondary" @click="loginAttempt">
                Login
                <v-icon icon="mdi-login" end></v-icon>
              </v-btn>
            </div>
            <div v-else>
              <v-btn color="secondary" @click="registerAttempt">
                Register
                <v-icon icon="mdi-account-plus" end></v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="error" class="w-75 d-flex justify-center mx-auto pa-0"
      ><v-col class="pa-0"
        ><v-alert type="error">{{ errorMessage }}</v-alert></v-col
      ></v-row
    >
  </div>
</template>

<script>
import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();

export default {
  data: () => ({
    username: null,
    password: null,
    login: true, // true for login, false for register
    error: false,
    errorMessage: null,
  }),

  methods: {
    // Handle Enter key press
    handleKeydown(event) {
      if (event.key === "Enter") {
        if (this.login) {
          this.loginAttempt();
        } else {
          this.registerAttempt();
        }
      }
    },

    // Switch to login mode
    loginUser() {
      this.login = true;
    },

    // Switch to register mode
    registerUser() {
      this.login = false;
    },

    // Login attempt function
    async loginAttempt() {
      if (!this.username || !this.password) {
        this.errorMessage = "Username and Password are required";
        this.error = true;
        return;
      }

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Handle successful login
          console.log("Login successful", data);
          userStore.setUser(data);
          this.$router.push({ path: "/" });
        } else {
          // Handle error (invalid username/password)
          console.error("Login failed", data.error);
          this.errorMessage = "Invalid Username or Password";
          this.error = true;
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        this.error = true;
      }
    },

    // Register attempt function
    async registerAttempt() {
      if (!this.username || !this.password) {
        this.errorMessage = "Username and Password are required";
        this.error = true;
        return;
      }

      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Handle successful registration
          console.log("Registration successful", data);
          userStore.setUser(data);
          this.error = false;
          this.$router.push({ path: "/" });
        } else {
          // Handle error (username exists or other issues)
          console.error("Registration failed", data.error);
          this.errorMessage = "Registration failed: " + data.error;
          this.error = true;
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
        this.errorMessage = "An error occurred during registration: " + error;
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.logintitle {
  background-color: #4db6ac;
}
</style>
