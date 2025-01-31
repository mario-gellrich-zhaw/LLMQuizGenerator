<template>
  <div>
    <v-row class="w-100 d-flex">
      <v-col cols="3" class="d-flex w-100" v-for="user in users" :key="user.id">
        <v-card class="w-100 pa-1" variant="elevated">
          <v-card-subtitle class="mt-2">
            {{ user.role === 1 ? "Teacher" : "Student" }}
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="10" class="d-flex">{{ user.username }}</v-col>
              <v-col cols="2" class="d-flex justify-end">
                <v-btn
                  color="red-lighten-2"
                  v-if="user.role === 1"
                  @click="changeRole(user.id, 2)"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
                <v-btn color="primary" v-else @click="changeRole(user.id, 1)">
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Declare the 'users' prop
defineProps({
  users: {
    type: Array,
    required: true,
  },
});

// Emit an event to the parent to update the user data
const emit = defineEmits(["updatedUser"]);

// Function to handle role change
const changeRole = async (userId, newRole) => {
  try {
    const response = await fetch("http://localhost:5000/update_user_role", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        role: newRole,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to update role:", errorData.error);
    } else {
      console.log(
        `User role updated to ${newRole === 1 ? "Teacher" : "Student"}`
      );
      // Emit the updated user list to the parent component
      emit("updatedUser", { userid: userId, role: newRole });
    }
  } catch (error) {
    console.error("Error updating role:", error);
  }
};
</script>
