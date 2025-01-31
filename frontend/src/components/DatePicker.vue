<template>
  <div>
    <v-row class="mt-2">
      <v-btn
        @click="togglePanel"
        class="w-100 d-flex"
        append-icon="mdi-calendar"
      >
        <span v-if="formattedFromDate && formattedToDate">
          {{ formattedFromDate }} - {{ formattedToDate }}
        </span>
        <span v-else>Select Date Range</span>
      </v-btn>
    </v-row>
    <transition name="fade">
      <v-row class="panel-content" v-if="isOpen">
        <v-col>
          <v-date-picker
            :first-day-of-week="1"
            hide-header
            v-model="fromDate"
            show-adjacent-months
            width="300"
          />
        </v-col>
        <v-col>
          <v-date-picker
            :first-day-of-week="1"
            hide-header
            v-model="toDate"
            :allowed-dates="disabledPastDates"
            show-adjacent-months
            width="300"
          />
        </v-col>
      </v-row>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      fromDate: null,
      toDate: null,
    };
  },
  computed: {
    formattedFromDate() {
      return this.formatDate(this.fromDate);
    },
    formattedToDate() {
      return this.formatDate(this.toDate);
    },
  },
  watch: {
    fromDate() {
      this.checkDates();
    },
    toDate() {
      this.checkDates();
    },
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
      if (this.fromDate && this.toDate) {
        this.fromDate = null;
        this.toDate = null;
      }
    },
    disabledPastDates(val) {
      return val >= new Date(this.fromDate);
    },
    checkDates() {
      if (this.fromDate && this.toDate) {
        this.isOpen = false;
        this.emitDates();
      }
    },
    formatDate(date) {
      if (!date) return null;
      const d = new Date(date);
      return d.toISOString().split("T")[0];
    },
    emitDates() {
      this.$emit("date-range-selected", {
        fromDate: this.formattedFromDate,
        toDate: this.formattedToDate,
      });
    },
  },
};
</script>

<style scoped>
.panel-content {
  position: absolute;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
