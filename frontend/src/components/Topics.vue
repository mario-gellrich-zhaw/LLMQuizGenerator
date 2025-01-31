<template>
  <div>
    <!-- List Display -->
    <h4 class="mb-2">Here are the topics:</h4>

    <div v-if="items.length > 0">
      <v-row v-for="(item, index) in items" :key="index" class="mt-2 w-100">
        <v-col cols="11"
          ><v-expansion-panels>
            <v-expansion-panel class="pa-2" disabled elevation="3">
              <v-expansion-panel-titel>
                {{ item }}
              </v-expansion-panel-titel>
            </v-expansion-panel>
          </v-expansion-panels></v-col
        >
        <v-col cols="1"
          ><v-btn color="red-lighten-2" @click="removeItem(index)">
            <v-icon
              color="white"
              size="x-large"
              icon="mdi-delete"
            ></v-icon> </v-btn
        ></v-col>
      </v-row>
    </div>
    <p v-else class="no-topics">No topics defined...</p>

    <!-- Input for Adding Items -->
    <v-row class="mt-4 w-100">
      <v-col cols="11">
        <v-text-field v-model="newItem" label="Add Topic" outlined />
      </v-col>
      <v-col cols="1">
        <v-btn color="secondary" class="mt-2" @click="addItem">
          <v-icon color="white" size="x-large" icon="mdi-plus"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Define emits using defineEmits
const emit = defineEmits();

// Initialize items as an empty array
const items = ref([]); // List of items
const newItem = ref(""); // Input value for the new item

// Emit the updated topics to the parent whenever the list changes
const emitTopics = () => {
  // Emit the topics array to the parent component
  emit("update:modelValue", items.value);
};

const addItem = () => {
  if (newItem.value.trim() !== "") {
    items.value.push(newItem.value); // Add item to the list
    newItem.value = ""; // Clear the input field
    emitTopics(); // Emit updated topics to parent
  }
};

const removeItem = (index) => {
  items.value.splice(index, 1); // Remove the item by index
  emitTopics(); // Emit updated topics to parent
};

// Watch for changes in the items list to emit the updates
watch(items, () => {
  emitTopics(); // Ensure the parent is always updated when topics change
});
</script>

<style scoped>
.no-topics {
  color: #757575;
}
</style>
