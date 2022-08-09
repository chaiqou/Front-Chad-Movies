<template>
  <div
    class="flex flex-wrap content-center items-center justify-center h-screen text-center"
  >
    <div>
      <p class="text-[#DDCCAA] font-bold text-2xl md:text-6xl leading-normal">
        Find any quote in
      </p>
      <p
        class="text-[#DDCCAA] font-bold text-2xl md:text-6xl leading-normal mb-8 md:mt-4"
      >
        millions of movie lines
      </p>
      <router-link
        :to="{ name: 'registration-page' }"
        class="text-white bg-[#E31221] hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
        >{{ $t("getstarted") }}</router-link
      >
    </div>
  </div>
</template>
