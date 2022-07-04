<template>
  <thanks-modal main-text="Your account has been activated.">
    <img src="@/assets/svgs/email-verified.svg" alt="activated" />
    <template #modal-button>
      <router-link
        to="/dashboard"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        Go to my news feed
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "./ThanksModal.vue";
import { mapActions } from "pinia";
import { useUserVerify } from "@/stores/useUserVerify";

export default {
  components: {
    ThanksModal,
  },
  created() {
    this.verifyEmail(this.$route.query);
  },
  methods: {
    ...mapActions(useUserVerify, ["verifyEmail"]),
  },
};
</script>
