<template>
  <div>
    <v-row class="mt-2 d-flex">
      <v-col cols="2">
        <v-select
          label="Select Class"
          :items="classItems"
          variant="underlined"
          @update:modelValue="handleClassChange"
        ></v-select>
      </v-col>
      <v-col cols="5">
        <v-select
          label="Select Quiz"
          :items="quizzes"
          variant="underlined"
          @update:modelValue="handleQuizChange"
        ></v-select>
      </v-col>
      <v-col cols="5">
        <DatePicker @date-range-selected="getFromToDate" />
      </v-col>
    </v-row>

    <!--chart component-->
    <ShowChart
      :parentChartData="chartData"
      :chartStatus="chartStatus"
      v-if="chartData"
    />
    <v-row v-else
      ><v-col
        ><v-alert type="info"
          >Please select class, quiz and date range to show chart</v-alert
        ></v-col
      ></v-row
    >
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const classItems = ref([]);
    const selectedClass = ref(null);
    const selectedQuiz = ref(null);
    const results = ref([]);
    const quizzes = ref([]);
    const fromDate = ref(null);
    const toDate = ref(null);
    const chartData = ref(null);
    const chartStatus = ref(false);

    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:5000/get_results_base", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to load classes:", errorData.error);
        } else {
          const data = await response.json();
          results.value = data;
          classItems.value = data.classes;
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    });

    function getQuizzesByClassId(class_id) {
      const classData = classItems.value.find((cls) => cls.value === class_id);

      if (!classData) {
        throw new Error(`No class found with class_id: ${class_id}`);
      }
      return classData.quizzes;
    }

    const getFromToDate = (data) => {
      fromDate.value = data.fromDate;
      toDate.value = data.toDate;
      handleGetData();
    };

    const handleClassChange = (c) => {
      selectedClass.value = c;
      quizzes.value = getQuizzesByClassId(c);
      handleGetData();
    };

    const handleQuizChange = (quiz) => {
      selectedQuiz.value = quiz;
      handleGetData();
    };

    const handleGetData = async () => {
      chartStatus.value = false;
      if (
        fromDate.value &&
        toDate.value &&
        selectedClass.value &&
        selectedQuiz.value
      ) {
        try {
          // Make a GET request to the API
          const response = await fetch(
            `http://localhost:5000/get_results?from=${fromDate.value}&to=${toDate.value}&class=${selectedClass.value}&quiz=${selectedQuiz.value}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Failed to fetch results:", errorData.error);
            return;
          }

          const data = await response.json();
          if (!data.Status) {
            chartStatus.value = false;
            chartData.value = { datasets: [] };
          } else {
            chartData.value = {
              labels: data.labels,
              datasets: [
                {
                  data: data.data,
                  backgroundColor: "#80CBC4",
                  label: data.label,
                },
              ],
            };
            chartStatus.value = true;
          }
        } catch (error) {
          console.error("Error fetching results:", error);
        }
      }
    };

    return {
      getFromToDate,
      classItems,
      selectedClass,
      selectedQuiz,
      handleClassChange,
      handleQuizChange,
      getQuizzesByClassId,
      quizzes,
      results,
      handleGetData,
      chartData,
      chartStatus,
    };
  },
};
</script>

<style scoped></style>
