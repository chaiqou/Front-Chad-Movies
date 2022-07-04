<template>
  <div class="snap-y snap-proximity h-[100vh] overflow-y-scroll">
    <div class="h-[100vh]">
      <landing-nav-bar />
      <landing-center />
    </div>
    <landing-scrollable-images />
  </div>
</template>

<script>
import LandingScrollableImages from "@/components/landing/LandingScrollableImages.vue";
import LandingNavBar from "@/components/landing/LandingNavBar.vue";
import LandingCenter from "@/components/landing/LandingCenter.vue";

import { useAuthToken } from "@/stores/useAuthToken";

import axios from "axios";
import { mapWritableState } from "pinia";

export default {
  components: {
    LandingScrollableImages,
    LandingNavBar,
    LandingCenter,
  },

  computed: {
    ...mapWritableState(useAuthToken, ["token"]),
  },

  mounted() {
    if (localStorage.getItem("auth") !== null) {
      axios
        .post("http://localhost:8000/api/checkToken", {
          token: this.token,
        })
        .then((response) => {
          if (response) {
            this.$router.push({ name: "dashboard-page" });
          }
        });
    }
  },
};
</script>
