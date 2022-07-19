<template>
  <DashboardTimeline>
    <div
      v-if="post"
      class="bg-[#11101A] rounded-lg w-2/3 mt-6 ml-48 overflow-hidden"
    >
      <div class="flex flex-col p-4">
        <div class="flex items-center">
          <div class="w-8">AQ PROFILE IMAGE</div>
          <div class="ml-6">
            <div class="text-sm text-white font-bold">
              {{ post.userinfo.name }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-white font-bold text-sm">
            {{ post.quote_ka }}
            <span class="text-[#DDCCAA]">{{ post.movieinfo.title.en }}</span>
          </p>
        </div>
      </div>
      <div class="w-full p-4">
        <img
          :src="backend + post.thumbnail"
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
          <p class="text-white">aq komentarebis</p>
        </div>
      </div>
    </div>
  </DashboardTimeline>
</template>

<script>
import IconDashboardComment from "@/components/icons/IconDashboardComment.vue";
import IconDashboardHearth from "@/components/icons/IconDashboardHearth.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";

export default {
  components: { IconDashboardComment, IconDashboardHearth, DashboardTimeline },

  props: {
    post: {
      type: Object,
      required: true,
    },
    backend: {
      type: String,
      required: true,
    },
  },
};
</script>
