<template>
  <div
    v-for="notification in readdata"
    :key="notification.id"
    class="relative grid bg-[#000000] px-5 py-6"
  >
    <button
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-900 border border-gray-700 transition ease-in-out duration-150"
    >
      <div class="md:flex flex-col items-center justify-between">
        <div class="flex">
          <div class="w-8">
            <img
              v-if="notification.message.user.profile_image"
              :src="backurl + notification.message.user.profile_image"
              alt="user profile"
              class="w-8 h-8 mr-2 object-cover rounded-full"
            />
            <img
              v-else
              src="@/assets/images/vue-profile.jpg"
              alt="vue profile photo"
              class="w-8 h-8 mr-4 object-cover rounded-full"
            />
          </div>
          <div
            v-if="notification.hasOwnProperty('commentBy')"
            class="text-sm text-white flex-col"
          >
            <p
              class="text-base font-medium mb-6 md:mr-24 mr-20 ml-8 text-white whitespace-nowrap"
            >
              {{ notification.commentBy }}
            </p>
            <div class="flex items-center">
              <IconComment />
              <p class="ml-2 whitespace-nowrap">Commented to your quote</p>
            </div>
          </div>
          <div v-else class="text-sm text-white flex-col">
            <p
              class="text-base font-medium mb-6 md:mr-24 mr-20 ml-8 text-white whitespace-nowrap"
            >
              {{ notification.likedBy }}
            </p>
            <div class="flex items-center">
              <IconSmallHearth />
              <span class="ml-2 whitespace-nowrap">Reacted to your quote </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center md:ml-12">
        <p class="text-base font-medium text-white">
          {{ convertNotificationDateForHumans }}
        </p>
      </div>
    </button>
  </div>
</template>
<script>
import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
import axios from "@/config/axios/index";
import IconSmallHearth from "../icons/IconSmallHearth.vue";
import IconComment from "../icons/IconComment.vue";
import moment from "moment";
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
    ...mapWritableState(useUserProfileStore, ["backurl"]),

    convertNotificationDateForHumans() {
      let timestamp = Number(new Date());
      let date = new Date(timestamp);
      let formatedDate = moment(date).fromNow();
      return formatedDate;
    },
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
