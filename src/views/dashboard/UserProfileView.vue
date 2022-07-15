<template>
  <div class="text-white">{{ $route.params.userId }}</div>
</template>

<script>
import axios from "@/config/axios";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  computed: {
    ...mapWritableState(useUserProfileStore, ["user", "loading"]),
  },
  async created() {
    await axios
      .get("users/", {
        params: {
          userId: this.$route.params.userId,
        },
      })
      .then((response) => {
        console.log(response.data);
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
