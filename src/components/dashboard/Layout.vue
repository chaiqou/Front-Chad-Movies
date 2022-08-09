<template>
  <div>
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div class="flex-1 flex flex-col min-h-0">
        <div class="flex items-center h-16 flex-shrink-0 px-8 bg-[#222030]">
          <span
            class="text-[#DDCCAA] invisible md:visible font-medium text-base leading-[150%]"
            >MOVIE QUOTES</span
          >
        </div>
        <Sidebar />
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
};
</script>
