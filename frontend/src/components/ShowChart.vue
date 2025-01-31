<template>
  <div>
    <v-row class="w-100" v-if="chartStatus">
      <v-col class="chart-height justify-center d-flex">
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="parentChartData" /></v-col
    ></v-row>
    <v-row v-else
      ><v-col><v-alert>No data available for range</v-alert></v-col></v-row
    >
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    parentChartData: {
      type: Object,
      required: true, // Enforce passing the data prop
    },
    chartStatus: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
<style>
.chart-height {
  height: 600px;
}
</style>
