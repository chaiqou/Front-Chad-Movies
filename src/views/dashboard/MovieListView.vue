<template>
  <DashboardLayout />

  <DashboardTimeline>
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-white font-medium mt-4 text-24 ml-8 md:ml-0"
          >My list of movies (Total 25)</span
        >
        <div class="flex justify-end items-center">
          <p class="flex mr-8 mt-4 items-end invisible md:visible space-x-2">
            <img src="@/assets/svgs/search.svg" alt="search" />
            <span class="text-white">search</span>
          </p>
          <button
            class="items-center invisible md:visible inline-flex justify-center mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
            @click="movieAddButtonToggl"
          >
            <img
              class="mr-2"
              src="@/assets/svgs/add-button.svg"
              alt="addmovie"
            />
            Add movie
          </button>
        </div>
      </div>
      <div
        v-if="toggle"
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
      >
        <div class="relative mx-auto w-auto max-w-2xl">
          <div>
            <AddMovieModal />
          </div>
        </div>
      </div>
    </template>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import AddMovieModal from "@/components/modals/AddMovieModal.vue";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    AddMovieModal,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    movieAddButtonToggl() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
