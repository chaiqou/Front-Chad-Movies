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
        <div
          v-for="notification in unread"
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
                <p class="text-base font-medium text-white">
                  {{ notification.commentBy }}
                </p>
                <p class="mt-1 text-sm text-white flex">
                  <IconComment />
                  <span class="ml-2">{{ notification.comment }}</span>
                </p>
              </div>
              <div>
                <p class="text-base font-medium text-white ml-10">
                  {{ notification.created_at }}
                </p>
                <p class="mt-1 text-sm text-[#198754] flex">
                  <span class="ml-12">New</span>
                </p>
              </div>
            </div>
          </button>
        </div>
        <!-- WAKITXULI NOTIFICATIONS -->
        <div
          v-for="notification in read"
          :key="notification.id"
          class="relative grid gap-6 bg-[#000000] px-5 py-6 sm:gap-8 sm:p-8"
        >
          <button
            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-900 transition ease-in-out duration-150"
            z
          >
            <img
              src="https://i.ibb.co/C1sj76g/Screenshot-from-2022-07-18-22-07-37.png"
              alt="profildis foto"
              class="w-8 h-8 object-cover rounded-full"
            />
            <div class="flex items-center justify-between">
              <div class="ml-4">
                <p class="text-base font-medium text-white">
                  {{ notification.commentBy }}
                </p>
                <p class="mt-1 text-sm text-white flex">
                  <IconComment />
                  <span class="ml-2">{{ notification.comment }}</span>
                </p>
              </div>
              <div>
                <p class="text-base font-medium text-white ml-10 mb-6">
                  {{ notification.created_at }}
                </p>
              </div>
            </div>
          </button>
        </div>

        <!-- WAKITXULI NOTIFICATIONS -->
      </div>
    </div>
  </div>
</template>

<script>
import IconComment from "@/components/icons/IconComment.vue";
import { mapWritableState } from "pinia";
import { useNotificationsStore } from "@/stores/useNotificationsStore";
import axios from "@/config/axios/index";
export default {
  components: { IconComment },
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
