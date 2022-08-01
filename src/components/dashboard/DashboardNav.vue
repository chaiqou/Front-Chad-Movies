<template>
  <nav class="bg-[#222030] fixed md:w-screen w-[500px]">
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
            <DashboardNotification />
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
    <!-- Mobile menu -->
    <div class="sm:hidden">
      <div class="relative z-40 md:hidden">
        <div
          :class="[
            isOpen ? 'block bg-[#11101A] rounded-xl w-[90%] h-[70%]' : 'hidden',
          ]"
          class="fixed inset-0 flex z-40"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
            <div class="absolute top-0 right-0 -mr-12 pt-2"></div>

            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <li class="text-white space-y-8 ml-10 list-none">
                  <ul>
                    <div class="flex items-center">
                      <img
                        v-if="profile_image"
                        :src="backurl + profile_image"
                        alt="profile"
                        class="w-10 h-10 rounded-xl mr-2"
                      />
                      <p class="font-bold font-32">
                        {{ name }}
                      </p>
                    </div>
                    <div v-if="provider === null">
                      <router-link
                        class="text-[#CED4DA] text-sm"
                        :to="`/profile/`"
                        >{{ $t("edityourprofile") }}</router-link
                      >
                    </div>
                    <div v-else>
                      <router-link
                        :class="[profile_image ? 'ml-12' : 'ml-0']"
                        class="text-[#CED4DA] text-sm whitespace-nowrap"
                        :to="`/google-profile`"
                        >{{ $t("edityourprofile") }}
                      </router-link>
                    </div>
                  </ul>
                  <router-link class="flex items-center" to="/dashboard">
                    <IconHome
                      class="mr-4"
                      :fill="$route.path === '/dashboard' ? 'red' : 'white'"
                    ></IconHome>
                    {{ $t("dashboard") }}</router-link
                  >

                  <router-link to="/movies" class="flex items-center">
                    <IconMovie
                      class="mr-4"
                      :fill="$route.path === '/movies' ? 'red' : 'white'"
                    ></IconMovie>
                    {{ $t("movies") }}
                  </router-link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "@/config/axios/index";

import IconResponsiveNav from "@/components/icons/IconResponsiveNav.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconMovie from "@/components/icons/IconMovie.vue";
import IconHome from "@/components/icons/IconHome.vue";

import DashboardNotification from "@/components/dashboard/DashboardNotification.vue";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";

import { useUserProfileStore } from "@/stores/useUserProfileStore";
import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { mapActions, mapWritableState } from "pinia";
export default {
  components: {
    IconResponsiveNav,
    IconSearch,
    DashboardNotification,
    LanguageSwitcher,
    IconMovie,
    IconHome,
  },
  data() {
    return {
      isOpen: false,
      search: "",
    };
  },
  computed: {
    ...mapWritableState(useAuthTokenStore, ["token"]),
    ...mapWritableState(useUserProfileStore, [
      "loading",
      "email",
      "name",
      "profile_image",
      "provider",
      "backurl",
    ]),
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
          localStorage.removeItem("userId");
          this.$router.push({ name: "home-page" });
        });
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
