<template>
  <div class="relative inline-block text-left">
    <div>
      <button type="button" @click="quotetoggle">
        <IconDropdownDots />
      </button>
    </div>

    <div
      v-if="quote_toggle"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-[#24222F]"
    >
      <div class="py-3 px-3 space-y-2">
        <div class="flex items-center">
          <IconDropdownEye />
          <a href="#" class="text-white block px-3 py-2 text-sm">View Post</a>
        </div>
        <div class="flex items-center">
          <IconDropdownPen />
          <a href="#" class="text-white block px-3 py-2 text-sm">Edit</a>
        </div>
        <div class="flex items-center">
          <IconDelete />
          <a href="#" class="text-white block px-3 py-2 text-sm">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconDropdownDots from "@/components/icons/IconDropdownDots.vue";
import IconDropdownEye from "@/components/icons/IconDropdownEye.vue";
import IconDropdownPen from "@/components/icons/IconDropdownPen.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";
export default {
  components: {
    IconDropdownDots,
    IconDropdownEye,
    IconDropdownPen,
    IconDelete,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    quotetoggle: {
      type: [Function, Boolean],
      required: true,
    },
  },
  computed: {
    ...mapWritableState(useAddQuoteStore, ["quote_toggle"]),
  },
  // methods: {
  //   toggleDropdown() {
  //     this.toggle = !this.toggle;
  //   },
  // },
};
</script>
