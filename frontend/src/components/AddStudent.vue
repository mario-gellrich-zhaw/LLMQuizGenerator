<template>
  <v-card :title="className">
    <v-card-text>
      <v-row><v-col>Students in class:</v-col></v-row>
      <v-row class="d-flex w-100 mb-2">
        <v-list>
          <v-list-item
            v-for="(user, index) in classUsers"
            :key="index"
            :title="user.username"
          ></v-list-item>
        </v-list>
      </v-row>
      <v-divider class="mb-2"></v-divider>
      <v-row class="mt-2">
        <v-col cols="12">Students not in class:</v-col>
        <v-col cols="4" v-for="user in users" :key="user.id">
          <v-card variant="tonal">
            <v-card-text>
              <v-row>
                <v-col cols="10" class="d-flex align-center">
                  {{ user.username }}
                </v-col>
                <v-col cols="2" class="d-flex justify-end">
                  <v-btn
                    variant="elevated"
                    color="secondary"
                    size="small"
                    @click="addUserToClass(user)"
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
    classUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      users: [], // Initialize the users array
    };
  },
  computed: {
    // A computed property that will get the current users in the class from the store
    currentClassUsers() {
      const classesStore = useClassesStore();
      const classData = classesStore.classes.find(
        (c) => c.class_id === this.classId
      );
      return classData ? classData.users : [];
    },
  },
  mounted() {
    // Call the API to get users not in the class
    this.getUsersNotInClass();
  },
  methods: {
    async getUsersNotInClass() {
      try {
        const response = await fetch(
          `http://localhost:5000/get_all_users_for_class?class_id=${this.classId}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to fetch users:", errorData.error);
        } else {
          const data = await response.json();
          this.users = data.users; // Store the fetched users in the users array
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    async addUserToClass(user) {
      try {
        // Step 1: Make the API call to add the user to the class
        const response = await fetch(
          "http://localhost:5000/add_user_to_class",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              class_id: this.classId,
              user_id: user.id,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to add user to class:", errorData.error);
          return; // Exit early if the API call fails
        }

        // Step 2: If the API call is successful, update the store
        const classesStore = useClassesStore();
        classesStore.addUserToClass(this.classId, {
          user_id: user.id,
          username: user.username,
        });

        // Step 3: Remove the user from the `users` list (local change)
        this.users = this.users.filter((u) => u.id !== user.id);

        console.log(`User ${user.username} added to the class.`);
      } catch (error) {
        console.error("Error adding user to class on server:", error);
      }
    },
  },
};
</script>
