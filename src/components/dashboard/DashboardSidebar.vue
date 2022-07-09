<template>
  <div>
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
      <!-- <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div> -->

      <div
        :class="[isOpen ? 'block bg-red-500 w-[90%] h-[70%]' : 'hidden']"
        class="fixed inset-0 flex z-40"
      >
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
          <!--Close button, show/hide based on off-canvas menu state. -->
          <div class="absolute top-0 right-0 -mr-12 pt-2"></div>

          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">gg mobile</nav>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-[#222030]">
          <span
            class="text-[#DDCCAA] invisible md:visible font-medium text-base leading-[150%]"
            >MOVIE QUOTES</span
          >
        </div>

        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">gg desktop</nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <!-- aqedan -->
      <nav class="bg-[#222030]">
        <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-end h-16">
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <!-- navbaris itemebi-->
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
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
      </nav>
      <!-- aqedan -->
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div
                class="border-4 border-dashed border-gray-200 rounded-lg h-96"
              ></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
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
