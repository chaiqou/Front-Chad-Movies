<template>
  <div></div>
</template>

<script>
import axios from "@/config/axios";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  computed: {
    ...mapWritableState(useUserProfileStore, ["user", "loading"]),
  },
  mounted() {
    axios
      .get("/api/user" + this.$route.params.id)
      .then((response) => {
        this.user = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
};
</script>
