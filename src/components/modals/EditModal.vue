<template>
  <div class="absolute z-10 inset-0">
    <div class="flex items-center h-screen justify-center text-center sm:p-0">
      <div
        class="relative flex justify-between bg-[#11101A] rounded-lg overflow-hidden md:p-8 pt-8"
      >
        <div class="absolute flex justify-around md:space-x-52 space-x-28">
          <button class="flex text-white">
            <IconDelete />
            Delete
          </button>
          <h3 class="text-lg text-center leading-6 font-medium text-white">
            Edit Movie
          </h3>
          <button
            type="button"
            class="bg-[#11101A] rounded-md text-gray-400"
            @click="toggle"
          >
            <IconExit />
          </button>
        </div>
        <div class="sm:flex sm:items-start mt-4">
          <div class="text-center">
            <div class="border border-b-0 opacity-25 text-[#EFEFEF] mt-4"></div>
            <div class="md:text-left text-white mt-8">Nikoloz Lomtadze</div>
            <div class="flex items-center h-full w-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconExit from "@/components/icons/IconExit.vue";
import IconDelete from "@/components/icons/IconDelete.vue";

export default {
  components: { IconExit, IconDelete },
  props: {
    title: {
      type: String,
      default: "",
    },
    toggle: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
