<template>
  <div class="flex">
    <div class="absolute z-10 inset-0 overflow-y-auto">
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
              @click="toggle"
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

              <div class="md:text-left flex items-center text-white m-4">
                <img
                  v-if="profile_image"
                  :src="backurl + profile_image"
                  alt="user profile"
                  class="w-8 h-8 mr-2 object-cover rounded-full"
                />
                <img
                  v-else
                  src="@/assets/images/vue-profile.jpg"
                  alt="vue profile photo"
                  class="w-8 h-8 mr-2 object-cover rounded-full"
                />
                {{ name }}
              </div>
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
import { useUserProfileStore } from "@/stores/useUserProfileStore";
import { mapWritableState } from "pinia";

export default {
  components: { IconExit },
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
  computed: {
    ...mapWritableState(useUserProfileStore, [
      "backurl",
      "profile_image",
      "name",
    ]),
  },
};
</script>
