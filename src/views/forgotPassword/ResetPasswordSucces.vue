<template>
  <thanks-modal
    header-text="Success!"
    main-text="Your Email changed successfully"
  >
    <IconEmailVerified />
    <template #modal-button>
      <router-link
        to="/login"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        Go to my news feed
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "@/components/modals/ThanksModal.vue";
import IconEmailVerified from "@/components/icons/IconEmailVerified.vue";
export default {
  components: {
    ThanksModal,
    IconEmailVerified,
  },
};
</script>
