<template>
  <thanks-modal
    main-text="Please check your email and follow the instructions to activate your account."
  >
    <img src="@/assets/svgs/send.svg" alt="send" />
    <template #modal-button>
      <router-link
        to="/"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        Close
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "@/components/modals/ThanksModal.vue";

export default {
  components: {
    ThanksModal,
  },
};
</script>
