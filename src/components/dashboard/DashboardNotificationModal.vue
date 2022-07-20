<template>
  <div class="mt-10 fixed">
    <div
      class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div
          class="px-5 py-5 bg-[#000000] flex justify-between space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
        >
          <div class="flow-root">
            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white"
            >
              <span class="ml-3">Notifications</span>
            </a>
          </div>

          <div class="flow-root">
            <button
              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white"
              @click="readAllNotification"
            >
              <span class="ml-3">Mark as all read</span>
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
