<template>
  <div
    v-for="notification in readdata"
    :key="notification.id"
    class="relative grid gap-6 bg-[#000000] px-5 py-6 sm:gap-8 sm:p-8"
  >
    <button
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-900 transition ease-in-out duration-150"
      z
    >
      <div class="flex items-center justify-between">
        <div class="flex">
          <img
            src="https://i.ibb.co/C1sj76g/Screenshot-from-2022-07-18-22-07-37.png"
            alt="profildis foto"
            class="w-8 h-8 mr-4 object-cover rounded-full"
          />
          <div
            v-if="notification.data.hasOwnProperty('commentBy')"
            class="text-sm text-white flex-col"
          >
            <p class="text-base font-medium mb-6 mr-24 text-white">
              {{ notification.data.commentBy }}
            </p>
            <div class="flex items-center">
              <IconComment />
              <p class="ml-2 whitespace-nowrap">
                Commented to your movie quote
              </p>
            </div>
          </div>
          <div v-else class="text-sm text-white flex-col">
            <p class="text-base font-medium mb-6 mr-24 text-white">
              {{ notification.data.likedBy }}
            </p>
            <div class="flex items-center">
              <IconSmallHearth />
              <span class="ml-2">Reacted to your quote</span>
            </div>
          </div>
        </div>
        <div>
          <p class="text-base font-medium text-white mb-12">
            {{ notification.data.created_at }}
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
    readdata: {
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
