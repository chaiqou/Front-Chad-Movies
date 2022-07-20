<template>
  <div
    v-for="notification in unreaddata"
    :key="notification.id"
    class="relative grid gap-6 bg-[#000000] px-5 py-6 sm:gap-8 sm:p-8"
  >
    <button
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-900 transition ease-in-out duration-150"
      @click="readNotification(notification)"
    >
      <img
        src="https://i.ibb.co/C1sj76g/Screenshot-from-2022-07-18-22-07-37.png"
        alt="profildis foto"
        class="w-8 h-8 object-cover rounded-full"
      />
      <div class="flex items-center justify-between">
        <div class="ml-4">
          <div
            v-if="notification.data.hasOwnProperty('commentBy')"
            class="mt-1 text-sm text-white flex"
          >
            <p class="text-base font-medium text-white">
              {{ notification.data.commentBy }}
            </p>
            <IconComment />
            <span class="ml-2">Commented to your movie quote</span>
          </div>
          <div v-else class="mt-1 text-sm text-white flex">
            <p class="text-base font-medium text-white">
              {{ notification.data.likedBy }}
            </p>
            <IconSmallHearth />
            <span class="ml-2">Reacted to your quote</span>
          </div>
        </div>
        <div>
          <p class="text-base font-medium text-white ml-10">
            {{ notification.data.created_at }}
          </p>
          <p class="mt-1 text-sm text-[#198754] flex">
            <span class="ml-12">New</span>
          </p>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import axios from "@/config/axios/index";
import IconSmallHearth from "../icons/IconSmallHearth.vue";
import IconComment from "../icons/IconComment.vue";

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
