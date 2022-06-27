<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <slot></slot>
    <h1 class="text-white text-center font-bold text-5xl mt-6">
      <slot name="major-text"></slot>
    </h1>
    <h5 class="text-white text-center font-medium text-2xl mt-6">
      <slot name="minor-text"></slot>
    </h5>
    <RouterLink
      to="/"
      class="inline-flex items-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#E31221] focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Return home
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
