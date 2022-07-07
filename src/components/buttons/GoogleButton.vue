<template>
  <button
    type="button"
    class="flex justify-center w-full mt-4 rounded-md shadow-sm px-4 py-2 border border-white text-base font-medium text-white"
    @click="loginGoogle"
  >
    <img src="@/assets/svgs/google.svg" alt="Google" class="mr-2" />

    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    loginGoogle: {
      type: Function,
      required: true,
    },
  },
};
</script>
