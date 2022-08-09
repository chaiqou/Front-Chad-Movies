<template>
  <div class="invisible md:visible">
    <Layout />
  </div>
  <main class="flex-1 md:mt-16 overflow-y-auto">
    <div class="max-w-5xl mx-auto px-22 sm:px-6 md:px-8">
      <div
        class="bg-[#11101A] rounded-lg md:w-3/4 items-center ml-70 overflow-hidden"
      >
        <SinglePostHeader :quotedata="quotedata" />
        <div class="border-b border-gray-800"></div>
        <div class="flex flex-col p-4">
          <div class="flex items-center">
            <div class="w-8">
              <img
                v-if="quotedata.user.profile_image"
                :src="backurl + quotedata.user.profile_image"
                alt="user profile"
                class="w-8 h-8 mr-2 object-cover rounded-full"
              />
              <img
                v-else
                src="@/assets/images/vue-profile.jpg"
                alt="vue profile photo"
                class="w-8 h-8 mr-2 object-cover rounded-full"
              />
            </div>
            <div class="ml-6">
              <div class="text-sm text-white font-bold">
                {{ quotedata.user.name }}
              </div>
            </div>
          </div>
          <div class="mt-4 space-y-4">
            <p
              class="border flex justify-between border-gray-500 p-4 font-bold text-sm"
            >
              <span class="text-white">"{{ quotedata.quote.quote.en }}"</span>
              <span class="text-[#6C757D]">Eng</span>
            </p>
            <p
              class="text-white border flex justify-between border-gray-500 p-4 font-bold text-sm"
            >
              <span>"{{ quotedata.quote.quote.ka }}"</span>
              <span class="text-[#6C757D]">ქარ</span>
            </p>
          </div>
        </div>
        <div class="w-full p-4">
          <img
            :src="backend + quotedata.thumbnail"
            alt="postimage"
            class="w-full rounded-md"
          />
        </div>
        <div class="flex border-1 border-green-500 m-4 space-x-4">
          <button
            class="flex justify-center py-2"
            @click="commentToggle = !commentToggle"
          >
            <p class="mr-2 text-white font-bold">
              {{ quotedata.comments_count }}
            </p>
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
                :src="backurl + quotedata.user.profile_image"
                alt="profile"
                class="w-10 h-10 mr-2 object-cover rounded-full"
              />
            </div>
            <div class="ml-4 flex-1">
              <div class="bg-[#11101A] rounded-lg p-2 text-sm">
                <p class="mb-2 font-bold text-white">
                  {{ comment.commentBy }}
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
    </div>
  </main>
</template>

<script>
import IconDashboardComment from "@/components/icons/IconDashboardComment.vue";
import IconDashboardHearth from "@/components/icons/IconDashboardHearth.vue";

import LikeAndUnlikeMixin from "@/mixins/LikeAndUnlikeMixin";
import ListenToCommentAndLikeMixin from "@/mixins/ListenToCommentAndLikeMixin";
import AddCommentToPostMixin from "@/mixins/AddCommentToPostMixin";
import Layout from "@/components/dashboard/Layout.vue";
import SinglePostHeader from "@/components/dashboard/SinglePostHeader.vue";

import { mapWritableState } from "pinia";
import { useDashboardQuotesStore } from "@/stores/useDashboardQuotesStore";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  components: {
    IconDashboardComment,
    IconDashboardHearth,
    Layout,
    SinglePostHeader,
  },

  mixins: [
    LikeAndUnlikeMixin,
    ListenToCommentAndLikeMixin,
    AddCommentToPostMixin,
  ],

  props: {
    backend: {
      type: String,
      required: true,
    },
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
    ...mapWritableState(useDashboardQuotesStore, ["quotes"]),
    ...mapWritableState(useUserProfileStore, ["profile_image", "backurl"]),
  },
};
</script>
