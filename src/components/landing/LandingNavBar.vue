<template>
  <nav class="p-5 flex items-center justify-between whitespace-nowrap">
    <p class="text-[#DDCCAA] text-lg font-medium leadieng-[150%]">
      MOVIE QUOTES
    </p>

    <ul class="flex items-center">
      <select
        class="invisible md:visible flex items-center text-white border-none rounded-lg mr-6 bg-gray-900"
      >
        <option value="english">
          <span class="mr-4">ENG</span>
          <IconArrowDown />
        </option>
        <option value="georgian">
          <span class="mr-4">GEO</span>
          <IconArrowDown />
        </option>
      </select>
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

<script>
import IconArrowDown from "../icons/IconArrowDown.vue";
export default { components: { IconArrowDown } };
</script>
