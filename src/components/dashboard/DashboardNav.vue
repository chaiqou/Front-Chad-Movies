<template>
  <nav class="bg-[#222030]">
    <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <span class="text-3xl cursor-pointer md:hidden block mx-2">
            <img
              src="@/assets/svgs/nav-burger.svg"
              alt="burger"
              @click="toggleModal"
            />
          </span>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <span
            class="text-[#DDCCAA] invisible md:visible font-medium text-base leading-[150%]"
            >MOVIE QUOTES</span
          >
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="ml-3 relative flex items-center space-x-4">
            <img
              class="md:hidden"
              src="@/assets/svgs/search.svg"
              alt="search"
            />
            <img src="@/assets/svgs/bell.svg" alt="bell px-5 py-2.5 mr-2" />
            <span class="text-white hidden md:flex">
              ENG
              <img
                class="ml-2"
                src="@/assets/svgs/arrow-down.svg"
                alt="arrowdown"
              />
            </span>
            <button
              class="text-white border border-gray-300 font-medium rounded-md text-sm px-4 py-2 hidden md:flex"
              @click="logout"
            >
              Log Out
            </button>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --></div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden">
      <div
        :class="[isOpen ? 'block' : 'hidden']"
        class="px-2 pt-2 pb-3 space-y-1"
      >
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Dashboard</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >

        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "@/config/axios/index";

import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { mapActions, mapWritableState } from "pinia";
export default {
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
