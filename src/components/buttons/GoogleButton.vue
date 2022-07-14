<template>
  <button
    type="button"
    class="flex justify-center w-full mt-4 rounded-md shadow-sm px-4 py-2 border border-white text-base font-medium text-white"
    @click="loginGoogle"
  >
    <IconGoogle class="mr-2" />

    <slot></slot>
  </button>
</template>

<script>
import IconGoogle from "../icons/IconGoogle.vue";
export default {
  components: { IconGoogle },
  props: {
    loginGoogle: {
      type: Function,
      default: null,
    },
  },
};
</script>
