<template>
  <not-accesed-layout>
    <div class="relative">
      <img
        class="absolute bottom-0 left-2 z-10"
        src="@/assets/images/forbidden-gandolf.png"
        alt="gandolf"
      />
      <img
        class="relative bottom-2 left-0"
        src="@/assets/images/forbidden-union.png"
        alt="union"
      />
    </div>
    <template #major-text>You shall not pass!</template>
    <template #minor-text
      >Sorry, but you don’t have permission to access this page
    </template>
  </not-accesed-layout>
</template>

<script>
import NotAccesedLayout from "@/components/layouts/NotAccesedLayout.vue";
export default {
  components: {
    NotAccesedLayout,
  },
};
</script>
