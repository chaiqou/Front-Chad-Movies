<template>
  <figure
    class="md:flex bg-[#11101A] rounded-xl md:w-1/2 md:overflow-hidden p-8 md:p-0 mt-8"
  >
    <div class="relative left-[95%] mt-2">
      <QuoteDropdown :quote="quote" />
    </div>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div class="flex items-center md:ml-4 space-x-12">
        <img
          height="80"
          width="240"
          :src="backurl + quote.thumbnail"
          alt="quotethumbnail"
        />

        <blockquote>
          <p class="text-lg font-medium text-white">
            "{{ quote.quote["en"] }}"
          </p>
        </blockquote>
      </div>
      <div class="border-b border-1 border-gray-800 w-[550px]"></div>

      <div class="font-medium flex space-x-8">
        <p class="text-white flex items-center">
          {{ quote.comment.length }}
          <span class="ml-2"><IconFacebookComment /></span>
        </p>
        <p class="text-white flex items-center">
          {{ quote.like.length }} <span class="ml-2"><IconHeart /></span>
        </p>
      </div>
    </div>
  </figure>
</template>

<script>
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconFacebookComment from "@/components/icons/IconFacebookComment.vue";
import QuoteDropdown from "./QuoteDropdown.vue";

export default {
  components: { IconHeart, IconFacebookComment, QuoteDropdown },
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },
};
</script>
