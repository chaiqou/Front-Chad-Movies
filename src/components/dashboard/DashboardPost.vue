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
            {{ quote.userinfo.name }}
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-white font-bold text-sm">
          "{{ quote.quote.quote.en }}"
          <router-link :to="`/quote/${quote.id}`">
            <span class="text-[#DDCCAA]">{{ quote.movieinfo.title.en }}</span>
          </router-link>
        </p>
      </div>
    </div>
    <div class="w-full p-4">
      <img
        :src="backurl + quote.thumbnail"
        alt="postimage"
        class="w-full rounded-md"
      />
    </div>
    <div class="flex border-1 border-green-500 m-4 space-x-4">
      <button
        class="flex justify-center py-2"
        :class="[]"
        @click="commentToggle = !commentToggle"
      >
        <p class="mr-2 text-white font-bold">{{ quote.comments_count }}</p>
        <IconDashboardComment />
      </button>
      <button class="flex justify-center py-2 rounded-lg">
        <p class="mr-2 text-white font-bold">{{ quote.likes_count }}</p>
        <IconDashboardHearth />
      </button>
    </div>
    <div v-if="commentToggle" class="border-t border-gray-700 p-4 pt-2">
      <!-- aq tviton komentarebi v-for_it -->
      <div
        v-for="comment in quote.comments"
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
            <p class="mb-2 font-bold text-white">{{ comment.user }}</p>
            <p class="inline text-white">{{ comment.body }}</p>
          </div>
          <div class="border-b border-gray-700 p-4 pt-2"></div>
        </div>
      </div>

      <!-- es komentaris dasaweri div -->
      <div class="flex">
        <input
          v-model="commentBody"
          type="text"
          name="comment"
          class="w-full pl-4 h-12 border-none text-white focus:outline-none rounded-lg bg-[#24222F] placeholder-[#CED4DA]"
          placeholder="Write a comment"
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
export default {
  components: { IconDashboardComment, IconDashboardHearth },
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentToggle: false,
      commentBody: "",
    };
  },
  computed: {
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },
};
</script>
