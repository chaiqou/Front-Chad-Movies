<template>
  <div class="relative inline-block text-left">
    <div>
      <button type="button" @click="toggle">
        <IconDropdownDots />
      </button>
    </div>

    <div
      v-if="toggleDropdown"
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
          <button
            class="text-white block px-3 py-2 text-sm"
            @click="delete_quote(currentMovie[0].quotes[0].id)"
          >
            Delete
          </button>
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
import { mapWritableState } from "pinia";
import { useMovieListStore } from "@/stores/useMovieListStore";
import axios from "@/config/axios/index";

export default {
  components: {
    IconDropdownDots,
    IconDropdownEye,
    IconDropdownPen,
    IconDelete,
  },
  data() {
    return {
      toggleDropdown: false,
    };
  },
  computed: {
    ...mapWritableState(useMovieListStore, ["currentMovie"]),
  },
  methods: {
    toggle() {
      this.toggleDropdown = !this.toggleDropdown;
    },
    delete_quote(quote_id) {
      axios.delete(`quotes/` + quote_id).then(() => {
        window.location.reload();
      });
    },
  },
};
</script>
