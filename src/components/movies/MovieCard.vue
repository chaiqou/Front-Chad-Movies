<template>
  <div>
    <a :href="`movie/${movie.id}`">
      <img
        :src="backurl + movie.thumbnail"
        alt="movieimage"
        class="hover:opacity-50 transition ease-in-out duration-500 rounded-lg h-full w-full"
      />
    </a>
    <div class="mt-4 text-24 ml-8 md:ml-0">
      <h3 class="text-white md:mb-2 md:mt-2">
        {{ movie.title.en }} ({{ movie.year }})
      </h3>
      <div class="flex items-center">
        <span class="text-white mr-2">{{ movie.quotes.length }}</span>
        <IconComment />
      </div>
    </div>
  </div>
</template>

<script>
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";
import IconComment from "../icons/IconComment.vue";

export default {
  components: { IconComment },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapWritableState(useMovieListStore, ["backurl", "currentMovie"]),
  },
};
</script>
