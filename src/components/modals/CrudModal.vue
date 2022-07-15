<template>
  <div class="flex">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-start min-h-screen min-w-screen sm:items-center justify-center text-center sm:p-0"
      >
        <div
          class="relative bg-[#11101A] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden sm:my-8 max-w-2xl p-12"
        >
          <div class="absolute top-0 right-0 pt-6 pr-4">
            <button
              type="button"
              class="bg-[#11101A] rounded-md text-gray-400 hover:text-gray-500"
              @click="onCloseModal"
            >
              <IconExit />
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <div class="text-center">
              <h3 class="text-lg text-center leading-6 font-medium text-white">
                {{ title }}
              </h3>
              <div
                class="border border-b-0 opacity-25 text-[#EFEFEF] mt-4"
              ></div>
              <div class="md:text-left text-white mt-8">Nikoloz Lomtadze</div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import IconExit from "@/components/icons/IconExit.vue";

export default {
  components: { IconExit },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapWritableState(useAddMovieStore, ["toggle"]),
  },
  methods: {
    onCloseModal() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
