<template>
  <div>
    <h1 class="mb-3">Change Admins</h1>
    <!-- Pass the users array as a prop to AddAdmins -->
    <AddAdmins :users="users" @updatedUser="handleUpdateUsers" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Create a reactive variable to store users
const users = ref([]);

const handleUpdateUsers = (updatedUser) => {
  const userIndex = users.value.findIndex(
    (user) => user.id === updatedUser.userid
  );

  if (userIndex !== -1) {
    // Update the role of the user in the users array
    users.value[userIndex].role = updatedUser.role;
  }
};

// Fetch the users from the API onMounted
onMounted(async () => {
  try {
    const response = await fetch("http://localhost:5000/get_all_users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to load users:", errorData.error);
    } else {
      const data = await response.json();
      users.value = data.users; // Store the users array in the reactive variable
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});
</script>
