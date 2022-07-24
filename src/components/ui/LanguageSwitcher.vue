<template>
  <select
    v-model="language"
    class="invisible md:visible flex items-center border-none rounded-xl text-white mr-6 bg-inherit"
    @change="handleChange($event)"
  >
    <option class="text-white bg-gray-900" value="english">
      <span class="mr-4">ENG</span>
      <IconArrowDown />
    </option>
    <option class="text-white bg-gray-900" value="georgian">
      <span class="mr-4">GEO</span>
      <IconArrowDown />
    </option>
  </select>
</template>

<script>
import { useLanguageSwitchStore } from "@/stores/useLanguageSwitchStore";
import { mapWritableState } from "pinia";
import IconArrowDown from "../icons/IconArrowDown.vue";

export default {
  components: { IconArrowDown },

  computed: {
    ...mapWritableState(useLanguageSwitchStore, ["language"]),
  },

  methods: {
    handleChange(event) {
      localStorage.setItem("language", event.target.value);
      window.location.reload();
    },
  },
};
</script>
