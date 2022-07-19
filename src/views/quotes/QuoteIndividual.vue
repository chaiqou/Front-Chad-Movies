<template>
  <DashboardShowSinglePost
    :post="individual_quote"
    :backend="backurl"
  ></DashboardShowSinglePost>
</template>

<script>
import DashboardShowSinglePost from "@/components/dashboard/DashboardShowSinglePost.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: { DashboardShowSinglePost },
  computed: {
    ...mapWritableState(useAddQuoteStore, ["individual_quote"]),
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },
  created() {
    axios
      .get(`/quotes/${this.$route.params.id}`)
      .then((response) => {
        this.individual_quote = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
