<template>
  <div class="snap-y snap-proximity h-screen overflow-y-scroll">
    <div>
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
import axios from "@/config/axios/index";

import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    LandingScrollableImages,
    LandingNavBar,
    LandingCenter,
  },

  computed: {
    ...mapWritableState(useAuthTokenStore, ["token"]),
  },

  mounted() {
    if (localStorage.getItem("auth") !== null) {
      axios
        .post("checkToken", {
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
