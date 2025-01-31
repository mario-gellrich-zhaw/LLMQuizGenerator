<template>
  <v-container>
    <!-- File input for uploading -->
    <v-file-input
      v-model="file"
      label="Upload Image"
      accept="image/*"
      prepend-icon="mdi-upload"
      outlined
      @change="onFileChange"
    ></v-file-input>

    <!-- Display the preview of the uploaded image -->
    <v-row v-if="previewUrl">
      <v-col cols="12">
        <v-img :src="previewUrl" alt="Image Preview" max-height="300"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    existingImageUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      file: null, // Holds the selected file
      previewUrl: this.existingImageUrl || "", // Image preview URL
    };
  },
  methods: {
    // This method handles the change in file input
    onFileChange(event) {
      const file = event.target.files[0]; // Get the first file from the input
      if (file) {
        this.file = file; // Store the file in the data
        this.previewUrl = URL.createObjectURL(file); // Generate the preview URL
        console.log(URL.createObjectURL(file));
        // Emit the file and the preview URL to the parent component or store
        this.$emit("image-changed", file, this.previewUrl); // Emit file and URL
      } else {
        this.previewUrl = this.existingImageUrl; // Fallback to existing image URL
      }
    },
  },
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
