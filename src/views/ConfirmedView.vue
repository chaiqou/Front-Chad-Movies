<template>
  <thanks-modal
    :header-text="$t('thanks')"
    :main-text="$t('accountacctivated')"
  >
    <IconEmailVerified />
    <template #modal-button>
      <router-link
        to="/login"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        {{ $t("close") }}
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "@/components/modals/ThanksModal.vue";

import { useUserVerifyEmailStore } from "@/stores/useUserVerifyEmailStore";
import { mapActions } from "pinia";
import IconEmailVerified from "@/components/icons/IconEmailVerified.vue";

export default {
  components: {
    ThanksModal,
    IconEmailVerified,
  },
  created() {
    this.verifyEmail(this.$route.query);
  },
  methods: {
    ...mapActions(useUserVerifyEmailStore, ["verifyEmail"]),
  },
};
</script>
