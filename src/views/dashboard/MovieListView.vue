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
          <FormSubmitButton class="items-center invisible md:visible">
            <img
              class="mr-2"
              src="@/assets/svgs/add-button.svg"
              alt="addmovie"
            />
            Add movie</FormSubmitButton
          >
        </div>
      </div>
    </template>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import FormSubmitButton from "@/components/buttons/FormSubmitButton.vue";
export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    FormSubmitButton,
  },
};
</script>

<style lang="scss" scoped></style>
