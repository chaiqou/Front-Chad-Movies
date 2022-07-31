<template>
  <div class="mt-10 flex">
    <div
      class="fixed md:absolute z-10 left-[55vw] sm:left-[60vw] md:left-1/3 transform -translate-x-60 mt-3 w-screen max-w-xl"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div
          class="md:px-5 md:py-5 bg-[#000000] flex justify-between space-y-6 sm:flex"
        >
          <div class="flex">
            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white"
            >
              <span class="ml-3 mt-2">Notifications</span>
            </a>
          </div>

          <div class="flex">
            <button
              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white"
              @click="readAllNotification"
            >
              <span class="ml-3 mb-4">Mark as all read</span>
            </button>
          </div>
        </div>
        <!-- NOTIFIKACIEBI IWYEBA AQEDAN -->
        <NotificationUnread :unreaddata="unread" />
        <NotificationRead :readdata="read" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import axios from "@/config/axios/index";
import NotificationUnread from "@/components/notifications/NotificationUnread.vue";
import NotificationRead from "@/components/notifications/NotificationRead.vue";

export default {
  components: {
    NotificationUnread,
    NotificationRead,
  },
  computed: {
    ...mapWritableState(useNotificationsStore, [
      "read",
      "unread",
      "unreadCount",
    ]),
  },

  methods: {
    readAllNotification() {
      axios.post("markAllAsRead").then(() => {
        this.read.concat(this.unread);
        this.unread.splice(0, this.unread.length);
        this.unreadCount = 0;
      });
    },
  },
};
</script>
