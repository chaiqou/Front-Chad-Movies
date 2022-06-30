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

export default {
  components: {
    LandingScrollableImages,
    LandingNavBar,
    LandingCenter,
  },
};
</script>
