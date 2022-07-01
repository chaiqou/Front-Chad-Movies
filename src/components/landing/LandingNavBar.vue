<template>
  <nav class="p-5 flex items-center justify-between whitespace-nowrap">
    <p class="text-[#DDCCAA] text-lg font-medium leadieng-[150%]">
      MOVIE QUOTES
    </p>

    <ul class="flex items-center">
      <span class="invisible md:visible md:text-white px-5 py-2.5 mr-2">
        ENG S
      </span>
      <li>
        <router-link
          to="/register"
          class="invisible md:visible focus:outline-none text-white bg-[#E31221] hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm md:px-8 py-2.5 mr-2 mb-2"
          >Sign Up</router-link
        >
      </li>
      <li>
        <router-link
          to="/login"
          class="text-white border border-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2"
          >Log In</router-link
        >
      </li>
    </ul>
  </nav>
</template>
