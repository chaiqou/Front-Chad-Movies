<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-[#222030] fixed md:w-screen w-[500px]">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-end h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <span class="text-3xl cursor-pointer md:hidden block mx-2">
            <IconResponsiveNav @click="toggleModal" />
          </span>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="ml-3 relative flex items-center space-x-4">
            <div
              class="md:invisible mr-4 relative flex items-center rounded-md"
            >
              <input
                v-model="search"
                type="text"
                class="block w-48 pr-10 text-white border-none bg-inherit p-3 rounded-md"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              >
                <p class="flex items-center space-x-2 z-10">
                  <IconSearch />
                  <span class="text-white">{{ $t("search") }}</span>
                </p>
              </div>
            </div>
            <Notifications />
            <LanguageSwitcher />
            <button
              class="text-white border border-gray-300 font-medium rounded-md text-sm px-4 py-2 hidden md:flex"
              @click="logout"
            >
              {{ $t("logout") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <MobileNav :is-open="isOpen" />
  </nav>
</template>

<script>
import IconResponsiveNav from "@/components/icons/IconResponsiveNav.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import Notifications from "@/components/dashboard/Notifications.vue";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";
import axios from "@/config/axios/index";
import MobileNav from "@/components/dashboard/MobileNav.vue";

export default {
  components: {
    IconResponsiveNav,
    IconSearch,
    Notifications,
    LanguageSwitcher,
    MobileNav,
  },
  data() {
    return {
      search: "",
      isOpen: false,
    };
  },
  methods: {
    logout() {
      axios
        .post("logout", {
          token: localStorage.getItem("jwt_token"),
        })
        .then(() => {
          localStorage.removeItem("userId");
          localStorage.removeItem("jwt_token");
          this.$router.push({ name: "home-page" });
        });
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
