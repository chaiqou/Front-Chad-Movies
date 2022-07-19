import { defineStore } from "pinia";

export const useNotificationsStore = defineStore("useNotificationsStore", {
  state: () => ({
    read: {},
    unread: {},
    unreadCount: 0,
  }),
});
