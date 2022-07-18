<template>
  <DashboardLayout />
  <DashboardTimeline>
    <DashboardNewQuote />
    <DashboardPost v-for="quote in quotes" :key="quote.id" :quote="quote" />
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import DashboardNewQuote from "@/components/dashboard/DashboardNewQuote.vue";
import DashboardPost from "@/components/dashboard/DashboardPost.vue";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    DashboardNewQuote,
    DashboardPost,
  },

  computed: {
    ...mapWritableState(useDashboardQuotesStore, ["quotes"]),
  },

  mounted() {
    axios
      .get("quotes")
      .then((response) => {
        this.quotes = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
