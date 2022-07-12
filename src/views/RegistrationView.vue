<template>
  <form-modal>
    <template #major-text>Create an account</template>
    <template #minor-text>Start your journey!</template>
    <FormVee class="space-y-2" @submit="onSubmitRegister">
      <base-input
        v-model="name"
        label="Name"
        error-name="name"
        rules="required|min:3|max:15|lower-case"
        type="text"
        placeholder="Enter your name"
      />
      <base-input
        v-model="email"
        label="Email"
        error-name="email"
        rules="required|email"
        type="email"
        placeholder="Enter your email"
      />
      <base-input
        v-model="password"
        label="Password"
        error-name="password"
        name="password"
        rules="required|min:8|max:15|lower-case"
        type="password"
        placeholder="Password"
      />
      <base-input
        v-model="password_confirmation"
        label="Confirm Password"
        error-name="confirm"
        rules="required|confirmed:@password"
        type="password"
        placeholder="Password"
      />
      <div class="mt-5 sm:mt-6 items-center text-center">
        <button
          :disabled="form_submmiting"
          class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          {{ form_submmiting ? "Please wait..." : "Get started" }}
        </button>
        <google-button :login-google="onSubmitRegisterGoogle"
          >Sign in with Google</google-button
        >
      </div>
    </FormVee>
    <template #have-account>
      Already have an account?
      <router-link class="text-[#0D6EFD] underline" to="/login"
        >Log in</router-link
      >
    </template>
  </form-modal>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import FormModal from "@/components/modals/FormModal.vue";
import GoogleButton from "@/components/buttons/GoogleButton.vue";
import axios from "@/config/axios/index.js";

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
  // aq unda sheqmna reusable logika romelsac iyeneb login viewshic
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
    ...mapActions(useLoginStore, ["loginGoogleAction"]),
    onSubmitRegister() {
      this.form_submmiting = true;
      axios
        .post("register", this.getRegistrationData)
        .then(() => {
          this.form_submmiting = false;
          this.$router.push({ name: "user-registered-page" });
        })
        .catch((error) => {
          this.form_submmiting = false;
          console.log(error);
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
