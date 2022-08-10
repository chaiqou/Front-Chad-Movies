<template>
  <div v-if="notificationRef" ref="notificationRef" class="mt-10 flex">
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
              @click="readAllNotification()"
            >
              <span class="ml-3 mb-4">Mark as all read</span>
            </button>
          </div>
        </div>
        <NotificationUnread :unreaddata="notification.unread" />
        <NotificationRead :readdata="notification.read" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import axios from "@/config/axios/index";
import NotificationUnread from "@/components/notifications/NotificationUnread.vue";
import NotificationRead from "@/components/notifications/NotificationRead.vue";

const notification = useNotificationsStore();

const notificationRef = ref(true);

onClickOutside(notificationRef, () => {
  notificationRef.value = false;
});

const readAllNotification = () => {
  axios.post("markAllAsRead").then(() => {
    this.read.concat(this.unread);
    this.unread.splice(0, this.unread.length);
    this.unreadCount = 0;
  });
};
</script>
