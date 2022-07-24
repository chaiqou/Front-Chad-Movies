<template>
  <nav class="bg-[#222030] fixed w-screen">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-end h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <span class="text-3xl cursor-pointer md:hidden block mx-2">
            <IconResponsiveNav @click="toggleModal" />
          </span>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="ml-3 relative flex items-center space-x-4">
            <IconSearch class="md:hidden" />
            <DashboardNotification />
            <LanguageSwitcher />
            <button
              class="text-white border border-gray-300 font-medium rounded-md text-sm px-4 py-2 hidden md:flex"
              @click="logout"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden">
      <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
        <div
          :class="[isOpen ? 'block bg-red-500 w-[90%] h-[70%]' : 'hidden']"
          class="fixed inset-0 flex z-40"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
            <div class="absolute top-0 right-0 -mr-12 pt-2"></div>

            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">gg mobile</nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "@/config/axios/index";

import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { mapActions, mapWritableState } from "pinia";
import IconResponsiveNav from "../icons/IconResponsiveNav.vue";
import IconSearch from "../icons/IconSearch.vue";
import DashboardNotification from "@/components/dashboard/DashboardNotification.vue";
import LanguageSwitcher from "../ui/LanguageSwitcher.vue";
export default {
  components: {
    IconResponsiveNav,
    IconSearch,
    DashboardNotification,
    LanguageSwitcher,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapWritableState(useAuthTokenStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthTokenStore, ["setToken", "clearToken"]),
    logout() {
      axios
        .post("logout", {
          token: this.token,
        })
        .then(() => {
          this.clearToken();
          this.$router.push({ name: "home-page" });
        });
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
