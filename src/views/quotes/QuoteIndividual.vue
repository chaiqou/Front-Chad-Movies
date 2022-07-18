<template>
  <div>gg</div>
</template>

<script>
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
export default {
  computed: {
    ...mapWritableState(useAddQuoteStore, ["individual_quote"]),
  },
  created() {
    console.log(this.individual_quote);
    axios.get(`/quotes/${this.$route.params.id}`).then((response) => {
      this.individual_quote = response.data.data;
    });
  },
};
</script>
