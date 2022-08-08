<template>
  <form-modal>
    <template #major-text>{{ $t("createaccount") }}</template>
    <template #minor-text>{{ $t("startjurney") }}</template>
    <FormVee class="space-y-2" @submit="onSubmitRegister">
      <base-input
        id="name"
        v-model="name"
        :label="$t('firstname')"
        error-name="name"
        rules="required|min:3|max:15|lower-case"
        type="text"
        :placeholder="$t('nameplaceholder')"
      />
      <base-input
        id="email"
        v-model="email"
        :label="$t('email')"
        error-name="email"
        rules="required|email"
        type="email"
        :placeholder="$t('emailplaceholder')"
      />
      <base-input
        id="password"
        v-model="password"
        :label="$t('password')"
        error-name="password"
        name="password"
        rules="required|min:8|max:15|lower-case"
        type="password"
        :placeholder="$t('passwordplaceholder')"
      />
      <base-input
        id="confirm-password"
        v-model="password_confirmation"
        :label="$t('confirmpassword')"
        error-name="confirm"
        rules="required|confirmed:@password"
        type="password"
        :placeholder="$t('confirmpasswordplaceholder')"
      />
      <div class="mt-5 sm:mt-6 items-center text-center">
        <button
          id="registration-button"
          :disabled="form_submmiting"
          class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          {{ form_submmiting ? `${$t("pleasewait")}` : `${$t("getstarted")}` }}
        </button>
        <google-button :login-google="onSubmitRegisterGoogle">{{
          $t("signgoogle")
        }}</google-button>
      </div>
    </FormVee>
    <template #have-account>
      {{ $t("alreadyhaveanaccount") }}
      <router-link class="text-[#0D6EFD] underline" to="/login">{{
        $t("login")
      }}</router-link>
    </template>
  </form-modal>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import FormModal from "@/components/modals/FormModal.vue";
import GoogleButton from "@/components/buttons/GoogleButton.vue";
import axios from "@/config/axios/index.js";
import CheckTokenAndRedirectToDashboardMixin from "@/mixins/CheckTokenAndRedirectToDashboardMixin.js";

import { useRegisterStore } from "@/stores/useRegisterStore";
import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { useLoginStore } from "@/stores/useLoginStore";
import { Form as FormVee } from "vee-validate";
import { mapWritableState, mapActions } from "pinia";

export default {
  components: {
    FormVee,
    BaseInput,
    FormModal,
    GoogleButton,
  },
  mixins: [CheckTokenAndRedirectToDashboardMixin],

  computed: {
    ...mapWritableState(useRegisterStore, [
      "name",
      "email",
      "password",
      "password_confirmation",
      "form_submmiting",
      "getRegistrationData",
    ]),
    ...mapWritableState(useAuthTokenStore, ["token"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["loginGoogleAction"]),
    onSubmitRegister() {
      this.form_submmiting = true;
      axios
        .post("register", this.getRegistrationData)
        .then(() => {
          this.form_submmiting = false;
          this.$router.push({ name: "user-registered-page" });
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
    onSubmitRegisterGoogle() {
      this.loginGoogleAction().then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      });
    },
  },
};
</script>
