<template>
  <thanks-modal
    :header-text="$t('thanks')"
    :main-text="$t('pleasecheckyouremail')"
  >
    <IconSendEmail />
    <template #modal-button>
      <router-link
        :to="{ name: 'home-page' }"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        {{ $t("close") }}
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
