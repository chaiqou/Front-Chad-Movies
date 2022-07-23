<template>
  <thanks-modal
    header-text="Check your email"
    main-text="We have sent a password recover instructions to your email"
  >
    <IconSendEmail />
    <template #modal-button>
      <router-link
        to="/"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        Go to my email
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "@/components/modals/ThanksModal.vue";
import IconSendEmail from "@/components/icons/IconSendEmail.vue";
export default {
  components: {
    ThanksModal,
    IconSendEmail,
  },
};
</script>
