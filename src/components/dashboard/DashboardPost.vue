<template>
  <div class="bg-[#11101A] rounded w-2/3 mt-6 overflow-hidden">
    <div class="flex flex-col p-4">
      <div class="flex items-center">
        <div class="w-8">AQ PROFILE IMAGE</div>
        <div class="ml-6">
          <div class="text-sm text-white font-bold">Name user</div>
          <div class="text-sm text-white font-bold">12 min ago</div>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-white font-bold text-sm">aq filmis agwera</p>
      </div>
    </div>
    <div class="w-full p-4">
      <img
        src="@/assets/landing/interstellar.png"
        alt="postimage"
        class="w-full rounded-md"
      />
    </div>
    <div class="flex border-1 border-green-500 m-4 space-x-4">
      <button class="flex justify-center py-2">
        <p class="mr-2 text-white font-bold">10</p>
        <IconDashboardComment />
      </button>
      <button class="flex justify-center py-2 rounded-lg">
        <p class="mr-2 text-white font-bold">20</p>
        <IconDashboardHearth />
      </button>
    </div>
    <div>
      <div>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import IconDashboardComment from "../icons/IconDashboardComment.vue";
import IconDashboardHearth from "../icons/IconDashboardHearth.vue";
export default { components: { IconDashboardComment, IconDashboardHearth } };
</script>

<style lang="scss" scoped></style>
