<template>
  <thanks-modal
    :header-text="$t('thanks')"
    :main-text="$t('accountacctivated')"
  >
    <IconEmailVerified />
    <template #modal-button>
      <router-link
        :to="{ name: 'login-page' }"
        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
      >
        {{ $t("close") }}
      </router-link>
    </template>
  </thanks-modal>
</template>

<script>
import ThanksModal from "@/components/modals/ThanksModal.vue";
import axios from "@/config/axios/index";
import IconEmailVerified from "@/components/icons/IconEmailVerified.vue";

export default {
  components: {
    ThanksModal,
    IconEmailVerified,
  },
  data() {
    return {
      verify: "",
    };
  },

  created() {
    this.verifyEmail(this.$route.query);
  },

  methods: {
    verifyEmail(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get("email-verification", { params: ctx })
          .then((response) => {
            resolve(response);
            this.verify = response;
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
</script>
