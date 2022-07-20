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
  <DashboardNotificationModal v-if="toggleNotification" />
</template>

<script>
import IconBell from "@/components/icons/IconBell.vue";
import DashboardNotificationModal from "@/components/dashboard/DashboardNotificationModal.vue";
import { mapWritableState } from "pinia";
import axios from "@/config/axios/index";
import { useNotificationsStore } from "@/stores/useNotificationsStore";

export default {
  components: { IconBell, DashboardNotificationModal },

  data() {
    return {
      toggleNotification: true,
    };
  },
  computed: {
    ...mapWritableState(useNotificationsStore, [
      "read",
      "unread",
      "unreadCount",
    ]),
  },
  created() {
    this.getNotifications();
  },

  methods: {
    toggleNotificationModal() {
      this.toggleNotification = !this.toggleNotification;
    },
    getNotifications() {
      axios
        .post("/notifications")
        .then((response) => {
          this.read = response.data.read;
          this.unread = response.data.unread;
          this.unreadCount = response.data.unread.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
