<template>
  <form-modal>
    <template #major-text>{{ $t("loginpage") }}</template>
    <template #minor-text>{{ $t("enteryourdetails") }}</template>
    <FormVee class="space-y-2" @submit="onSubmitLogin">
      <div>
        <base-input
          id="login-email"
          v-model="email"
          :label="$t('email')"
          error-name="email"
          type="text"
          :placeholder="$t('emailplaceholder')"
          rules="required|min:3|email"
        />
      </div>
      <ShowHidePassword>
        <base-input
          id="login-password"
          v-model="password"
          :label="$t('password')"
          error-name="password"
          :type="showPasswordType"
          rules="required|min:8"
          :placeholder="$t('basicpasswordplaceholder')"
        />
      </ShowHidePassword>
      <div class="flex items-center justify-between">
        <base-checkbox v-model="remember" :label="$t('remember')" />
        <router-link
          class="text-[#0D6EFD] underline"
          :to="{ name: 'forgot-password-page' }"
          >{{ $t("forgotpassword") }}</router-link
        >
      </div>

      <div class="mt-5 sm:mt-6 items-center text-center">
        <button
          id="login-button"
          :disabled="form_submmiting"
          class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          {{ form_submmiting ? `${$t("pleasewait")}` : `${$t("getstarted")}` }}
        </button>
        <google-button :login-google="onSubmitLoginGoogle">{{
          $t("signgoogle")
        }}</google-button>
      </div>
    </FormVee>
    <template #have-account>
      {{ $t("donthaveaccount") }}
      <router-link
        class="text-[#0D6EFD] underline"
        :to="{ name: 'registration-page' }"
        >{{ $t("signup") }}</router-link
      >
    </template>
  </form-modal>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import BaseCheckbox from "@/components/form/BaseCheckbox.vue";
import FormModal from "@/components/modals/FormModal.vue";
import GoogleButton from "@/components/ui/buttons/GoogleButton.vue";
import axios from "@/config/axios/index.js";

import { useLoginStore } from "@/stores/useLoginStore";
import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { Form as FormVee } from "vee-validate";
import { mapWritableState, mapActions } from "pinia";
import ShowHidePassword from "@/components/ui/ShowHidePassword.vue";
import CheckTokenAndRedirectToDashboardMixin from "@/mixins/CheckTokenAndRedirectToDashboardMixin.js";

export default {
  components: {
    BaseInput,
    BaseCheckbox,
    FormModal,
    GoogleButton,
    FormVee,
    ShowHidePassword,
  },
  mixins: [CheckTokenAndRedirectToDashboardMixin],
  computed: {
    ...mapWritableState(useLoginStore, [
      "email",
      "password",
      "remember",
      "form_submmiting",
      "getUserData",
      "showPasswordType",
    ]),
  },

  methods: {
    ...mapActions(useAuthTokenStore, [
      "setToken",
      "clearToken",
      "setUserId",
      "setUserName",
    ]),
    ...mapActions(useLoginStore, ["loginGoogleAction"]),

    onSubmitLogin() {
      this.form_submmiting = true;
      axios
        .post("login", {
          email: this.email,
          password: this.password,
          remember: this.remember,
        })

        .then((response) => {
          this.form_submmiting = false;
          this.setUserId(response.data.user);
          this.setToken(response.data.access_token);
          this.setUserName(response.data.user.name);
          axios.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.access_token}`;
          this.$router.push({ name: "dashboard-page" });
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },

    onSubmitLoginGoogle() {
      this.loginGoogleAction().then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      });
    },
  },
};
</script>
