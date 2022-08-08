<template>
  <div
    id="parallax"
    class="snap-y snap-proximity h-screen overflow-y-auto bg-fixed"
    @scroll="handleScroll"
  >
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
import CheckTokenAndRedirectToDashboardMixin from "@/mixins/CheckTokenAndRedirectToDashboardMixin.js";

export default {
  components: {
    LandingScrollableImages,
    LandingNavBar,
    LandingCenter,
  },
  mixins: [CheckTokenAndRedirectToDashboardMixin],

  methods: {
    handleScroll() {
      let parallax = document.getElementById("parallax");
      window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
      });
    },
  },
};
</script>
