<template>
  <div class="flex-1 ml-8 flex flex-col overflow-y-hidden">
    <nav class="flex-1 px-2 py-4 space-y-1">
      <li class="text-white space-y-8 list-none">
        <ul>
          AVATAR
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
import IconMovie from "../icons/IconMovie.vue";
import IconHome from "../icons/IconHome.vue";
export default {
  components: { IconMovie, IconHome },
};
</script>
