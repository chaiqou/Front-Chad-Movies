<template>
  <div class="bg-[#11101A] rounded-lg w-2/3 mt-6 overflow-hidden">
    <div class="flex flex-col p-4">
      <div class="flex items-center">
        <div class="w-8">
          <img
            src="https://i.ibb.co/C1sj76g/Screenshot-from-2022-07-18-22-07-37.png"
            alt="profildis foto"
            class="w-8 h-8 object-cover rounded-full"
          />
        </div>
        <div class="ml-6">
          <div class="text-sm text-white font-bold">
            {{ quotedata.user.name }}
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-white font-bold text-sm">
          "{{ quotedata.quote.quote.en }}"
          <span class="text-[#DDCCAA]">{{ quotedata.movie.title.en }}</span>
        </p>
      </div>
    </div>
    <div class="w-full p-4">
      <img
        :src="backurl + quotedata.thumbnail"
        alt="postimage"
        class="w-full rounded-md"
      />
    </div>
    <div class="flex border-1 border-green-500 m-4 space-x-4">
      <!-- komentarebi aq -->
      <button
        class="flex justify-center py-2"
        @click="commentToggle = !commentToggle"
      >
        <p class="mr-2 text-white font-bold">{{ quotedata.comments_count }}</p>
        <IconDashboardComment />
      </button>
      <button class="flex justify-center py-2 rounded-lg" @click="likePost">
        <p class="mr-2 text-white font-bold">{{ likeCount }}</p>
        <IconDashboardHearth :fill="likedPost ? 'red' : 'white'" />
      </button>
    </div>
    <div v-if="commentToggle" class="border-t border-gray-700 p-4 pt-2">
      <div
        v-for="comment in quotedata.comments"
        :key="comment.id"
        class="flex my-4 items-center"
      >
        <div class="w-8">
          <img
            src="https://i.ibb.co/C1sj76g/Screenshot-from-2022-07-18-22-07-37.png"
            alt="profildis foto"
            class="w-8 h-8 object-cover rounded-full"
          />
        </div>
        <div class="ml-4 flex-1">
          <div class="bg-[#11101A] rounded-lg p-2 text-sm">
            <p class="mb-2 font-bold text-white">
              {{ comment.user }}
            </p>
            <p class="inline text-white">{{ comment.body }}</p>
          </div>
          <div class="border-b border-gray-700 p-4 pt-2"></div>
        </div>
      </div>

      <div class="flex">
        <textarea
          v-model="commentBody"
          type="text"
          name="comment"
          class="w-full pl-4 h-12 border-none text-white focus:outline-none rounded-lg bg-[#24222F] placeholder-[#CED4DA]"
          placeholder="Write a comment"
          @keypress.enter="addComment"
        />
        <input type="submit" hidden />
      </div>
    </div>
  </div>
</template>

<script>
import IconDashboardComment from "../icons/IconDashboardComment.vue";
import IconDashboardHearth from "../icons/IconDashboardHearth.vue";
import { mapWritableState } from "pinia";
import { useMovieListStore } from "@/stores/useMovieListStore";

import LikeAndUnlikeMixin from "@/mixins/LikeAndUnlikeMixin";
import ListenToCommentAndLikeMixin from "@/mixins/ListenToCommentAndLikeMixin";
import AddCommentToPostMixin from "@/mixins/AddCommentToPostMixin";

export default {
  components: { IconDashboardComment, IconDashboardHearth },

  mixins: [
    LikeAndUnlikeMixin,
    ListenToCommentAndLikeMixin,
    AddCommentToPostMixin,
  ],

  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      commentToggle: false,
    };
  },

  computed: {
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },
};
</script>
