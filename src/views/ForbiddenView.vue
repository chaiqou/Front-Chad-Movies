<template>
  <NotAccesedLayout>
    <div class="relative">
      <img
        class="absolute bottom-0 left-2 z-10"
        src="@/assets/forbidden-gandolf.png"
        alt="gandolf"
      />
      <img
        class="relative bottom-2 left-0"
        src="@/assets/forbidden-union.png"
        alt="union"
      />
    </div>
    <template v-slot:major-text>You shall not pass!</template>
    <template v-slot:minor-text
      >Sorry, but you don’t have permission to access this page
    </template>
  </NotAccesedLayout>
</template>

<script>
import NotAccesedLayout from "@/components/layouts/NotAccesedLayout.vue";
export default {
  components: {
    NotAccesedLayout,
  },
};
</script>
