<template>
  <section
    id="parallax"
    class="h-[100vh] text-white bg-interstellar-movie bg-no-repeat bg-cover bg-center snap-start bg-fixed"
    @scroll="handleScroll"
  >
    <div class="flex items-center justify-left h-screen ml-6 md:ml-12">
      <IconLine class="md:mb-28 w-1/12 md:w-12 mr-4 mb-24" />
      <h1 class="font-bold md:text-5xl text-2xl md:w-1/2 w-2/3">
        “You have to leave somethig behind to go forward”
        <br />
        <span class="text-base md:text-3xl font-bold leading-0 text-[#D9D9D9]"
          >Interstellar, 2014</span
        >
      </h1>
    </div>
  </section>
  <section
    class="h-[100vh] text-white bg-the-royal-tenenbaums bg-no-repeat bg-cover bg-center snap-start bg-fixed"
  >
    <div class="flex items-center justify-left h-screen ml-6 md:ml-12">
      <IconLine class="md:mb-30 w-1/12 md:w-12 mr-4 mb-40" />
      <h1 class="font-bold md:text-5xl text-2xl md:w-1/2 w-2/3">
        I think we’re just gonna have to be secretly in love with earch other
        and leave it that
        <br />
        <span class="text-base md:text-3xl font-bold leading-0 text-[#D9D9D9]"
          >The Royal Tenenbaums,2001
        </span>
      </h1>
    </div>
  </section>
  <section
    class="h-[99vh] text-white bg-shutter-island bg-no-repeat bg-cover bg-center snap-start bg-fixed"
  >
    <div class="flex items-center justify-left h-screen ml-6 md:ml-12">
      <IconLine class="md:mb-30 w-1/12 md:w-12 mr-4 mb-40" />
      <h1 class="font-bold md:text-5xl text-2xl md:w-1/2 w-2/3">
        I think we’re just gonna have to be secretly in love with earch other
        and leave it that
        <br />
        <span class="text-base md:text-3xl font-bold leading-0 text-[#D9D9D9]"
          >The Lord of the Rings, 2003</span
        >
      </h1>
    </div>
    <p class="text-[#DDCCAA] font-normal ml-6">
      © 2022 movie quotes. All rights reserved.
    </p>
  </section>
</template>

<script>
import IconLine from "@/components/icons/IconLine.vue";
export default {
  components: { IconLine },
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
