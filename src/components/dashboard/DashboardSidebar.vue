<template>
  <div class="flex-1 ml-8 flex flex-col overflow-y-hidden mt-8">
    <nav class="flex-1 px-2 py-4 space-y-1">
      <li class="text-white space-y-8 list-none">
        <ul v-if="user">
          <p class="font-bold font-32">{{ user.name }}</p>
          <router-link class="text-[#CED4DA] text-sm" :to="`/users/${user.id}`"
            >edit your profile</router-link
          >
        </ul>
        <router-link class="flex items-center" to="/dashboard">
          <IconHome
            class="mr-4"
            :fill="$route.path === '/dashboard' ? 'red' : 'white'"
          ></IconHome>
          News Feed
        </router-link>

        <router-link to="/movies" class="flex items-center">
          <IconMovie
            class="mr-4"
            :fill="$route.path === '/movies' ? 'red' : 'white'"
          ></IconMovie>
          List of movies
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
    ...mapWritableState(useUserProfileStore, ["user", "loading"]),
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
          console.log(response);
          this.user = response.data.data[0];
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>
