<template>
  <Layout />
  <Timeline>
    <NewQuote :send-search-request="sendSearchParameters" />
    <div v-if="!searchedData.length">
      <Post
        v-for="quotedata in quotes || []"
        :key="quotedata.id"
        :quotedata="quotedata"
      />
    </div>
    <div v-else>
      <Post
        v-for="quotedata in searchedData || []"
        :key="quotedata.id"
        :quotedata="quotedata"
      />
    </div>
    <observer @intersect="intersected" />
  </Timeline>
</template>

<script>
import Layout from "@/components/dashboard/Layout.vue";
import axios from "@/config/axios/index";
import Timeline from "@/components/dashboard/Timeline.vue";
import NewQuote from "@/components/dashboard/NewQuote.vue";
import Post from "@/components/dashboard/Post.vue";
import observer from "@/helpers/observer.vue";
import { useSearchDataStore } from "@/stores/useSearchDataStore";
import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";

export default {
  components: {
    Layout,
    Timeline,
    NewQuote,
    Post,
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
    searchAppropiateParameters() {
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

    async sendSearchParameters() {
      await axios
        .get(`/search`, {
          params: {
            type: this.searchAppropiateParameters().type,
            search: this.searchAppropiateParameters().search,
          },
        })
        .then((response) => {
          this.searchedData = [...response.data];
        });
    },
  },
};
</script>
