<template>
  <NotAccesedLayout>
    <div class="space-y-10">
      <img src="@/assets/error-ghost.png" alt="ghost" />
      <img src="@/assets/plate-ghost.png" alt="plate" />
    </div>
    <template v-slot:major-text>Whoops!</template>
    <template v-slot:minor-text
      >We can't see the page you are looking for
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
