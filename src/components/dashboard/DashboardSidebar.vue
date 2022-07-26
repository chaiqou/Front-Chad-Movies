<template>
  <div class="flex-1 ml-8 flex flex-col overflow-y-hidden mt-8">
    <nav class="flex-1 px-2 py-4 space-y-1">
      <li class="text-white space-y-8 list-none">
        <ul v-if="name">
          <p class="font-bold font-32">{{ name }}</p>
          <router-link class="text-[#CED4DA] text-sm" :to="`/profile/`">{{
            $t("edityourprofile")
          }}</router-link>
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
</template>

<script>
import IconMovie from "@/components/icons/IconMovie.vue";
import IconHome from "@/components/icons/IconHome.vue";
import axios from "@/config/axios/index";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
export default {
  components: { IconMovie, IconHome },
  computed: {
    ...mapWritableState(useUserProfileStore, [
      "loading",
      "email",
      "name",
      "profile_image",
    ]),
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      await axios
        .get("users/", {
          params: {
            userId: this.$route.params.userId,
          },
        })
        .then((response) => {
          this.email = response.data.data.email;
          this.name = response.data.data.name;
          this.profile_image = response.data.data.profile_image;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>
