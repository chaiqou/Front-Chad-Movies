<template>
  <div class="relative h-full inline-block w-full text-left">
    <div>
      <button type="button" @click="toggle">
        <IconDropdownDots />
      </button>
    </div>

    <div
      v-if="toggleDropdown"
      class="origin-bottom-top md:origin-top-right absolute left-[-20vw] md:right-0 mt-2 w-56 rounded-md bg-[#24222F]"
    >
      <div class="py-3 px-3 space-y-2">
        <div class="flex items-center">
          <IconDropdownEye />
          <router-link
            class="text-white block px-3 py-2 text-sm"
            :to="{ name: 'single-quote-page', params: { id: quote.id } }"
            >View Post</router-link
          >
        </div>
        <div class="flex items-center">
          <IconDropdownPen />
          <router-link
            :to="{
              name: 'edit-quote-page',
              params: { id: quote.id },
            }"
            class="text-white block px-3 py-2 text-sm"
            >Edit</router-link
          >
        </div>
        <div class="flex items-center">
          <IconDelete />
          <button
            class="text-white block px-3 py-2 text-sm"
            @click="delete_quote(quote.id)"
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
import axios from "@/config/axios/index";

export default {
  components: {
    IconDropdownDots,
    IconDropdownEye,
    IconDropdownPen,
    IconDelete,
  },

  props: {
    quote: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      toggleDropdown: false,
    };
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
