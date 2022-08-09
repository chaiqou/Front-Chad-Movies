<template>
  <SinglePost
    v-for="single in single_quote"
    :key="single.id"
    :quotedata="single || []"
    :backend="backurl"
  ></SinglePost>
</template>

<script>
import SinglePost from "@/components/dashboard/SinglePost.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: { SinglePost },

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
