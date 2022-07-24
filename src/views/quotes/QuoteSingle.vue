<template>
  <div>
    <DashboardSinglePost
      v-for="single in single_quote"
      :key="single.id"
      :quotedata="single || []"
      :backend="backurl"
    ></DashboardSinglePost>
  </div>
</template>

<script>
import DashboardSinglePost from "@/components/dashboard/DashboardSinglePost.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
// import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: { DashboardSinglePost },

  data() {
    return {
      single_quote: [],
    };
  },
  computed: {
    // ...mapWritableState(useAddQuoteStore, ["single_quote"]),
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },

  async beforeUpdate() {
    await axios
      .get(`/quotes/${this.$route.params.id}`, {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.single_quote = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
