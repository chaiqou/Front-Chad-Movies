<template>
  <DashboardSinglePost
    v-for="single in single_quote"
    :key="single.id"
    :quotedata="single || []"
    :backend="backurl"
  ></DashboardSinglePost>
</template>

<script>
import DashboardSinglePost from "@/components/dashboard/DashboardSinglePost.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: { DashboardSinglePost },

  computed: {
    ...mapWritableState(useAddQuoteStore, ["single_quote"]),
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },

  mounted() {
    this.showAppropiateQuote();
  },

  methods: {
    showAppropiateQuote() {
      if (this.$route.params.id) {
        axios
          .get(`/quotes/${this.$route.params.id}`, {
            params: {
              id: this.$route.params.id,
            },
          })
          .then((response) => {
            this.single_quote = response.data;
          });
      }
    },
  },
};
</script>
