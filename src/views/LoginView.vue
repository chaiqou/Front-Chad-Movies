<template>
  <form-modal>
    <template #major-text>Log in to your account</template>
    <template #minor-text>Welcome back! Please enter your details.</template>
    <FormVee class="space-y-2" @submit="onSubmitLogin">
      <base-input
        v-model="email"
        label="Email"
        error-name="email"
        type="text"
        placeholder="Enter your email"
        rules="required|min:3"
      />

      <base-input
        v-model="password"
        label="Password"
        error-name="password"
        type="password"
        rules="required|min:8"
        placeholder="Password"
      />
      <div class="flex items-center justify-between">
        <base-checkbox v-model="remember" label="Remember me" />
        <router-link class="text-[#0D6EFD] underline" to="/forgot-password"
          >Forgot password</router-link
        >
      </div>

      <div class="mt-5 sm:mt-6 items-center text-center">
        <form-submit-button>Sign in</form-submit-button>
        <google-button :login-google="onSubmitLoginGoogle"
          >Sign in with Google</google-button
        >
      </div>
    </FormVee>
    <template #have-account>
      Don't have an account?
      <router-link class="text-[#0D6EFD] underline" to="/register"
        >Sign up</router-link
      >
    </template>
  </form-modal>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import BaseCheckbox from "@/components/form/BaseCheckbox.vue";
import FormModal from "@/components/modals/FormModal.vue";
import FormSubmitButton from "@/components/buttons/FormSubmitButton.vue";
import GoogleButton from "@/components/buttons/GoogleButton.vue";
import axios from "@/config/axios/index.js";

import { useLoginStore } from "@/stores/useLoginStore";
import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
import { Form as FormVee } from "vee-validate";
import { mapWritableState, mapActions } from "pinia";

export default {
  components: {
    BaseInput,
    BaseCheckbox,
    FormModal,
    FormSubmitButton,
    GoogleButton,
    FormVee,
  },
  computed: {
    ...mapWritableState(useLoginStore, ["email", "password", "remember"]),
    ...mapWritableState(useAuthTokenStore, ["token"]),
  },
  // aqac shemidzlia mixinis gaketeba
  mounted() {
    if (localStorage.getItem("auth") !== null) {
      axios
        .post("checkToken", {
          token: this.token,
        })
        .then((response) => {
          if (response) {
            this.$router.push({ name: "dashboard-page" });
          }
        });
    }
  },

  methods: {
    ...mapActions(useAuthTokenStore, ["setToken", "clearToken"]),
    ...mapActions(useLoginStore, ["loginGoogleAction"]),

    onSubmitLogin() {
      axios
        .post("login", {
          email: this.email,
          password: this.password,
          remember_token: this.remember,
        })
        .then((response) => {
          this.setToken(response.data.access_token);
          axios.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.access_token}`;
          this.$router.push({ name: "dashboard-page" });
        })
        .catch((error) => console.log(error.response.data));
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
