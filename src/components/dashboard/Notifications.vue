<template>
  <div class="flex">
    <button @click="toggleNotificationModal">
      <IconBell />
    </button>
    <span
      v-if="unreadCount > 0"
      class="text-white font-bold px-2 mr-4 rounded-xl mb-8 bg-red-500"
      >{{ unreadCount }}</span
    >
  </div>
  <NotificationsModal v-if="toggleNotification" />
</template>

<script>
import IconBell from "@/components/icons/IconBell.vue";
import NotificationsModal from "@/components/dashboard/NotificationsModal.vue";
import axios from "@/config/axios/index";

import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  components: { IconBell, NotificationsModal },

  data() {
    return {
      toggleNotification: false,
    };
  },
  computed: {
    ...mapWritableState(useNotificationsStore, [
      "read",
      "unread",
      "unreadCount",
    ]),
    ...mapWritableState(useUserProfileStore, ["user"]),
  },
  created() {
    this.fetchNotifications();
  },

  methods: {
    toggleNotificationModal() {
      this.toggleNotification = !this.toggleNotification;
    },
    fetchNotifications() {
      axios.post("/notifications").then((response) => {
        this.read = response.data.read;
        this.unread = response.data.unread;
        this.unreadCount = response.data.unread.length;
      });
    },
  },
};
</script>
