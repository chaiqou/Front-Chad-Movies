<template>
  <not-accesed-layout>
    <div class="space-y-10">
      <img src="@/assets/images/error-ghost.png" alt="ghost" />
      <img src="@/assets/images/plate-ghost.png" alt="plate" />
    </div>
    <template #major-text>Whoops!</template>
    <template #minor-text
      >We can't see the page you are looking for
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
