<template>
  <DashboardLayout />
  <DashboardTimeline>
    <DashboardNewQuote />
    <DashboardPost
      v-for="quotedata in quotes || []"
      :key="quotedata.id"
      :quotedata="quotedata"
    />
    <observer @intersect="intersected" />
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
import observer from "@/components/helpers/observer.vue";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    DashboardNewQuote,
    DashboardPost,
    observer,
  },
  data() {
    return {
      page: 1,
    };
  },

  computed: {
    ...mapWritableState(useDashboardQuotesStore, ["quotes"]),
  },

  methods: {
    async intersected() {
      await axios
        .get(`quotes?page=${this.page++}`)
        .then((response) => {
          console.log(response);
          this.quotes = [...this.quotes, ...response.data.data];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
