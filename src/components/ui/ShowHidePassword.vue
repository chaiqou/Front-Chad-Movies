<template>
  <div class="relative">
    <slot></slot>
    <button
      class="absolute flex top-1/2 w-6 cursor-pointer items-center right-4 translate-y-2"
      @click.prevent="toggleInputType"
    >
      <IconShowHidePassword />
    </button>
  </div>
</template>

<script>
import IconShowHidePassword from "../icons/IconShowHidePassword.vue";
import { mapWritableState } from "pinia";
import { useLoginStore } from "@/stores/useLoginStore";
export default {
  components: { IconShowHidePassword },

  computed: {
    ...mapWritableState(useLoginStore, ["showPasswordType"]),
  },

  methods: {
    toggleInputType() {
      this.showPasswordType =
        this.showPasswordType === "password" ? "text" : "password";
    },
  },
};
</script>
