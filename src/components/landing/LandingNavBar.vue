<template>
  <nav class="p-5 flex items-center justify-between whitespace-nowrap">
    <p class="text-[#DDCCAA] text-lg font-medium leadieng-[150%]">
      {{ $t("nav.application.name") }}
    </p>

    <ul class="flex items-center">
      <LanguageSwitcher />
      <li>
        <router-link
          to="/register"
          class="invisible md:visible focus:outline-none text-white bg-[#E31221] hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm md:px-8 py-2.5 mr-2 mb-2"
          >{{ $t("signup") }}</router-link
        >
      </li>
      <li>
        <router-link
          to="/login"
          class="text-white border border-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2"
          >{{ $t("login") }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";
export default {
  components: { LanguageSwitcher },
};
</script>
