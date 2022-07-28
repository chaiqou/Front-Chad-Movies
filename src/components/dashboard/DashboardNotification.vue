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
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  components: { IconBell, DashboardNotificationModal },

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
    this.getNotifications();

    // const channel = window.Echo.private(`notification.3`);

    // channel
    //   .subscribed(() => {
    //     console.log("subscribed");
    //   })
    //   .listen("mushaobs", (notification) => {
    //     console.log(notification);
    //     console.log("mushaobs");
    //     this.unread.unshift(notification);
    //     this.unreadCount++;
    //   });
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
