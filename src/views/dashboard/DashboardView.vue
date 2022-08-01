<template>
  <DashboardLayout />
  <DashboardTimeline>
    <DashboardNewQuote :send-search-request="sendSearchRequest" />
    <div v-if="!searchedData.length">
      <DashboardPost
        v-for="quotedata in quotes || []"
        :key="quotedata.id"
        :quotedata="quotedata"
      />
    </div>
    <div v-else>
      <DashboardPost
        v-for="quotedata in searchedData || []"
        :key="quotedata.id"
        :quotedata="quotedata"
      />
    </div>
    <observer @intersect="intersected" />
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import axios from "@/config/axios/index";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import DashboardNewQuote from "@/components/dashboard/DashboardNewQuote.vue";
import DashboardPost from "@/components/dashboard/DashboardPost.vue";
import observer from "@/components/helpers/observer.vue";
import { useSearchDataStore } from "@/stores/useSearchDataStore";
import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";

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
    ...mapWritableState(useSearchDataStore, ["search", "searchedData"]),
  },

  unmounted() {
    this.quotes = [];
  },

  methods: {
    param() {
      if (this.search.includes("@")) {
        return {
          search: this.search.replace("@", ""),
          type: "movie",
        };
      } else if (this.search.includes("#")) {
        return {
          search: this.search.replace("#", ""),
          type: "quote",
        };
      } else {
        return {
          search: this.search,
          type: "none",
        };
      }
    },

    async intersected() {
      await axios.get(`quotes?page=${this.page++}`).then((response) => {
        this.quotes = [...this.quotes, ...response.data.data];
      });
    },

    async sendSearchRequest() {
      await axios
        .get(`/search`, {
          params: {
            type: this.param().type,
            search: this.param().search,
          },
        })
        .then((response) => {
          this.searchedData = [...response.data];
        });
    },
  },
};
</script>
