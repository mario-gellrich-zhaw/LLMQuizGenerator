<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-text-field
          v-model="classInput"
          label="Enter class name"
          color="secondary"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="mt-2">
        <v-btn
          :disabled="!classInput"
          color="secondary"
          @click="addClass"
          class="w-100"
        >
          Add Class
        </v-btn>
      </v-col>
    </v-row>
    <v-expansion-panels>
      <v-row
        v-for="(classItem, index) in classes"
        :key="index"
        class="d-flex w-100"
      >
        <v-col cols="12">
          <v-expansion-panel>
            <v-expansion-panel-title>
              Class: {{ classItem.class_name }}</v-expansion-panel-title
            >
            <v-expansion-panel-text>
              <p class="mb-5">Students:</p>
              <span v-if="classItem.users.length === 0"
                >No students in this class</span
              >
              <v-row
                v-else
                v-for="(student, index) in classItem.users"
                :key="index"
              >
                <v-divider></v-divider>
                <v-col cols="11">{{ student.username }}</v-col>
                <v-col cols="1" class="d-flex justify-end"
                  ><v-btn
                    color="red-lighten-2"
                    @click="
                      removeUserFromClass(classItem.class_id, student.user_id)
                    "
                    ><v-icon>mdi-delete</v-icon></v-btn
                  ></v-col
                >
              </v-row>
              <v-row class="d-flex justify-end mb-2">
                <v-col cols="2" class="mt-5"
                  ><v-btn
                    color="primary"
                    class="w-100"
                    @click="
                      openEditDialog(
                        classItem.class_id,
                        classItem.class_name,
                        classItem.users
                      )
                    "
                    >Add Students</v-btn
                  ></v-col
                ></v-row
              >

              <!--this is where quizzes are shown --------------------------------------------------------->
              <p class="mb-3">Quizzes:</p>
              <span v-if="classItem.quizzes.length === 0"
                >No Quizzes for this class</span
              >
              <v-row
                v-else
                class="mt-0 mb-0"
                v-for="(quiz, index) in classItem.quizzes"
                :key="index"
              >
                <v-divider></v-divider>
                <v-col cols="11">{{ quiz.title }}</v-col>
                <v-col cols="1" class="d-flex justify-end"
                  ><v-btn
                    color="red-lighten-2"
                    @click="
                      removeQuizFromClass(classItem.class_id, quiz.quiz_id)
                    "
                    ><v-icon>mdi-delete</v-icon></v-btn
                  ></v-col
                >
              </v-row>
              <v-row class="d-flex justify-end">
                <v-col cols="2" class="mt-5">
                  <v-dialog persistent class="w-75">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="secondary"
                        text="Add Quiz"
                        variant="flat"
                        class="w-100"
                      ></v-btn>
                    </template>
                    <template v-slot:default="{ isActive }"
                      ><AddQuizzes
                        @cancel="isActive.value = false"
                        :classId="classItem.class_id"
                        :className="classItem.class_name"
                        :classQuizzes="classItem.quizzes"
                    /></template>
                  </v-dialog> </v-col
              ></v-row>
              <v-row
                ><v-col class="d-flex justify-start mt-5"
                  ><v-btn
                    color="red-lighten-2"
                    :disabled="classItem.users.length !== 0"
                    @click="deleteClass(classItem.class_id)"
                    >Delete Class</v-btn
                  ></v-col
                ></v-row
              >
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-col>
      </v-row>
    </v-expansion-panels>
    <!-- Add Student Modal -->
    <v-dialog v-model="dialog" persistent class="w-75">
      <AddStudent
        @cancel="closeDialog"
        :classId="selectedClass"
        :className="selectedClassName"
        :classUsers="selectedClassUsers"
      />
    </v-dialog>

    <!-- Add Quiz Modal -->
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useClassesStore } from "@/stores/useClassesStore";

export default {
  setup() {
    const classInput = ref(""); // Define classInput as a ref
    const dialog = ref(false); // For the student modal
    const classesStore = useClassesStore();
    const selectedClass = ref(null);
    const selectedClassName = ref(null);
    const selectedClassUsers = ref(null);

    // Bind classes reactively to the store
    const classes = computed(() => classesStore.classes);

    // Function to handle the opening of the edit modal with class ID
    const openEditDialog = (classId, className, classUsers) => {
      dialog.value = true; // Show the dialog
      selectedClass.value = classId;
      selectedClassName.value = className;
      selectedClassUsers.value = classUsers;
    };

    // Function to close the dialog
    const closeDialog = () => {
      dialog.value = false;
      selectedClass.value = null;
      selectedClassName.value = null;
      selectedClassUsers.value = null;
    };

    // Function to add a class via API
    const addClass = async () => {
      if (!classInput.value) return;

      try {
        const response = await fetch("http://localhost:5000/add_class", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ class_name: classInput.value }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to add class:", errorData.error);
        } else {
          console.log(classesStore.classes);
          const newClass = await response.json();
          classesStore.addClass(newClass.class); // Add the new class to the store
          classInput.value = ""; // Clear the input
        }
      } catch (error) {
        console.error("Error adding class:", error);
      }
    };

    const removeUserFromClass = async (classid, userid) => {
      try {
        const response = await fetch(
          "http://localhost:5000/add_user_to_class",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              class_id: null,
              user_id: userid,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error: ", errorData.error);
        } else {
          classesStore.removeUserFromClass(classid, userid);
        }
      } catch (error) {
        console.error("Error removing student:", error);
      }
    };

    const removeQuizFromClass = async (classid, quizid) => {
      try {
        // Make the API call to the backend to delete the quiz from the class
        const response = await fetch(
          "http://localhost:5000/deleteQuizFromClass",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ class_id: classid, quiz_id: quizid }),
          }
        );

        // If the response is successful, remove the quiz from the class in the store
        if (response.ok) {
          const data = await response.json();
          console.log(data.message); // "Quiz removed from class successfully"

          // Now update the store to reflect the change
          classesStore.removeQuizFromClass(classid, quizid);
        } else {
          // If the response is not OK, handle the error (for example, log it or alert the user)
          const errorData = await response.json();
          console.error(errorData.error); // Handle the error
        }
      } catch (error) {
        // Handle any error that occurs during the fetch request
        console.error("Error during the request:", error);
      }
    };

    const deleteClass = async (classid) => {
      try {
        const response = await fetch("http://localhost:5000/deleteClass", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            class_id: classid,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error: ", errorData.error);
        } else {
          classesStore.removeClass(classid);
        }
      } catch (error) {
        console.error("Error removing class:", error);
      }
    };

    return {
      classInput,
      dialog,
      classes,
      selectedClass,
      selectedClassName,
      selectedClassUsers,
      openEditDialog,
      closeDialog,
      addClass,
      removeUserFromClass,
      deleteClass,
      removeQuizFromClass,
    };
  },
};
</script>
