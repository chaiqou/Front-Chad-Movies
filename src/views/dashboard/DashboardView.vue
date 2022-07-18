<template>
  <div class="flex flex-col h-screen overflow-y-hidden">
    <DashboardLayout />
  </div>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";

export default {
  components: { DashboardLayout },

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
