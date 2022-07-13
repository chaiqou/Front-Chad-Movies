<template>
  <DashboardLayout />
  <DashboardTimeline>
    <div class="md:flex container mx-auto">
      <img class="md:w-1/2 md:h-72" src="@/assets/joker.jpeg" alt="joker" />
      <div class="ml-2 md:ml-12">
        <div class="md:flex md:items-center md:justify-between">
          <h1 class="text-[#DDCCAA] font-medium text-2xl mt-4">
            Commitment Hasan(1999)
          </h1>
          <div
            class="items-center flex space-x-4 bg-[#24222F] p-4 rounded-lg invisible md:visible"
          >
            <img src="@/assets/svgs/trash.svg" alt="trash" />
            <div class="border-r-2">|</div>
            <img src="@/assets/svgs/edit.svg" alt="edit" />
          </div>
        </div>

        <p
          class="text-white bg-gray-500 inline-block p-1 rounded-lg font-bold mt-4"
        >
          Drama
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Director:
          <span class="text-white font-medium ml-2">Nikoloz Lomtadze</span>
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Budget:
          <span class="text-white font-medium ml-2">Nikoloz Lomtadze</span>
        </p>
        <p class="text-white font-normal mt-4">
          In a nursing home, resident Duke reads a romance story to an old woman
          who has senile dementia with memory loss. In the late 1930s, wealthy
          seventeen year-old Allie Hamilton is spending summer vacation in
          Seabrook. Local worker Noah Calhoun meets Allie at a carnival
        </p>
      </div>
    </div>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
  },
};
</script>
