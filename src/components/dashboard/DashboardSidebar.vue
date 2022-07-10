<template>
  <div class="flex-1 ml-8 flex flex-col overflow-y-hidden">
    <nav class="flex-1 px-2 py-4 space-y-1">
      <li class="text-white space-y-8 list-none">
        <ul>
          AVATAR
        </ul>

        <router-link class="flex items-center" to="/dashboard">
          <img class="mr-4" src="@/assets/svgs/home.svg" alt="homepage" />
          News feed
        </router-link>

        <router-link to="/movies" class="flex items-center">
          <img
            class="mr-4"
            src="@/assets/svgs/movie-page.svg"
            alt="moviespage"
          />
          List of movies
        </router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
