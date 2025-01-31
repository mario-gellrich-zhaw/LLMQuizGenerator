<template>
  <pre>
    <code  ref="codeBlock">
      {{ code }}
    </code>
  </pre>
</template>

<script setup>
import { ref, onMounted } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // Dark theme

// Props for the component
defineProps({
  code: {
    type: String,
    required: true, // The code snippet to highlight
  },
});

// Refs
const codeBlock = ref(null);

// Apply Highlight.js when the component is mounted or code changes
onMounted(() => {
  highlightCode();
});

// Function to apply syntax highlighting
const highlightCode = () => {
  if (codeBlock.value) {
    hljs.highlightElement(codeBlock.value);
  }
};
</script>

<style scoped>
/* Add optional styling for better presentation */
pre {
  overflow-x: auto;
}
</style>
