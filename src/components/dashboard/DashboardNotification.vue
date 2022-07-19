<template>
  <div class="flex">
    <button @click="toggleNotification = !toggleNotification">
      <IconBell />
    </button>
    <span class="text-white font-bold px-2 mr-4 rounded-xl mb-8 bg-red-500"
      >5</span
    >
  </div>
  <DashboardNotificationModal v-if="toggleNotification" />
</template>

<script>
import IconBell from "@/components/icons/IconBell.vue";
import DashboardNotificationModal from "./DashboardNotificationModal.vue";
export default {
  components: { IconBell, DashboardNotificationModal },
  data() {
    return {
      toggleNotification: false,
    };
  },
};
</script>
