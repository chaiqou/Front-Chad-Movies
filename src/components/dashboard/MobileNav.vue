<template>
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
                      :to="{ name: 'profile-page' }"
                      >{{ $t("edityourprofile") }}</router-link
                    >
                  </div>
                  <div v-else>
                    <router-link
                      :class="[profile_image ? 'ml-12' : 'ml-0']"
                      class="text-[#CED4DA] text-sm whitespace-nowrap"
                      :to="{ name: 'google-profile-page' }"
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
</template>

<script>
import IconMovie from "@/components/icons/IconMovie.vue";
import IconHome from "@/components/icons/IconHome.vue";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
export default {
  components: {
    IconMovie,
    IconHome,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapWritableState(useUserProfileStore, [
      "loading",
      "email",
      "name",
      "profile_image",
      "provider",
      "backurl",
    ]),
  },
};
</script>
