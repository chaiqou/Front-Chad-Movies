<template>
  <DashboardLayout />
  <DashboardTimeline>
    <DashboardNewQuote />
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import DashboardNewQuote from "@/components/dashboard/DashboardNewQuote.vue";

export default {
  components: { DashboardLayout, DashboardTimeline, DashboardNewQuote },

  computed: {
    ...mapWritableState(useDashboardQuotesStore, ["quotes"]),
  },

  mounted() {
    axios
      .get("quotes")
      .then((response) => {
        console.log(response);
        this.quotes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
