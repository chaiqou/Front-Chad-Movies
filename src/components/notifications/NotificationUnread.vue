<template>
  <div
    v-for="notification in unread"
    :key="notification.id"
    class="relative grid bg-[#000000] px-8 py-8"
  >
    <button
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-900 border border-gray-700 transition ease-in-out duration-150"
      @click="readNotification(notification)"
    >
      <div class="md:flex flex-col items-center justify-between">
        <div class="flex">
          <div class="w-8">
            <img
              v-if="notification.message.user.profile_image"
              :src="backurl + notification.message.user.profile_image"
              alt="user profile"
              class="w-8 h-8 object-cover rounded-full"
            />
            <img
              v-else
              src="@/assets/images/vue-profile.jpg"
              alt="vue profile photo"
              class="w-8 h-8 object-cover rounded-full"
            />
          </div>
          <div
            v-if="notification.hasOwnProperty('commentBy')"
            class="text-sm text-white flex-col"
          >
            <p class="text-base font-medium mb-6 mr-20 ml-8 text-white">
              {{ notification.commentBy }}
            </p>
            <div class="flex items-center">
              <IconComment />
              <p class="ml-2 whitespace-nowrap">Commented to your quote</p>
            </div>
          </div>
          <div v-else class="text-sm text-white flex-col">
            <p class="text-base font-medium mb-6 mr-20 ml-8 text-white">
              {{ notification.likedBy }}
            </p>
            <div class="flex items-center">
              <IconSmallHearth />
              <span class="ml-2 whitespace-nowrap">Reacted to your quote </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center ml-12">
        <div class="flex-col items-center justify-between space-between">
          <p class="text-base font-medium text-white">
            {{ convertTimestamp() }}
          </p>
          <p class="text-base font-medium mt-6 text-[#198754]">New</p>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import axios from "@/config/axios/index";
import IconSmallHearth from "@/components/icons/IconSmallHearth.vue";
import IconComment from "@/components/icons/IconComment.vue";

import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
import { convertTimestamp } from "@/helpers/convertTimestamp";

export default {
  components: {
    IconComment,
    IconSmallHearth,
  },
  props: {
    unreaddata: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapWritableState(useNotificationsStore, [
      "read",
      "unread",
      "unreadCount",
    ]),
    ...mapWritableState(useUserProfileStore, ["backurl"]),
    convertTimestamp,
  },

  methods: {
    readNotification(notification) {
      axios
        .post("markAsRead", {
          id: notification.id,
        })
        .then(() => {
          this.unread.splice(notification, 1);
          this.read.push(notification);
          this.unreadCount--;
        });
    },
  },
};
</script>
