<template>
  <form-modal>
    <template #major-text>{{ $t("forgotpassword") }}</template>
    <template #minor-text>{{ $t("enteremailandwesendpassword") }}</template>
    <FormVee class="space-y-2" @submit="sendForgotPasswordEmail">
      <base-input
        v-model="email"
        :label="$t('email')"
        error-name="email"
        type="text"
        :placeholder="$t('email')"
        rules="required|min:3"
      />

      <div class="mt-5 sm:mt-6 items-center text-center">
        <button
          :disabled="form_submmiting"
          class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          {{ form_submmiting ? "Please wait..." : "Send instructions" }}
        </button>
      </div>
    </FormVee>
    <template #have-account>
      <router-link :to="{ name: 'login-page' }">
        <span class="text-white text-2xl">&larr; </span> {{ $t("backtologin") }}
      </router-link>
    </template>
  </form-modal>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import FormModal from "@/components/modals/FormModal.vue";
import axios from "@/config/axios/index.js";
import { Form as FormVee } from "vee-validate";

export default {
  components: {
    BaseInput,
    FormModal,
    FormVee,
  },
  data() {
    return {
      form_submmiting: false,
      email: "",
    };
  },

  methods: {
    sendForgotPasswordEmail() {
      this.form_submmiting = true;
      axios
        .post("forgot-password", {
          email: this.email,
        })
        .then(() => {
          this.form_submmiting = false;
          this.$router.push({ name: "forgot-password-email-sent-page" });
        });
    },
  },
};
</script>
