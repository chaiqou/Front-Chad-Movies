<template>
  <form-modal>
    <template #major-text>Create an account</template>
    <template #minor-text>Start your journey!</template>
    <FormVee class="space-y-3" @submit="onSubmit">
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
        <form-submit-button>Get started</form-submit-button>
        <google-button>Sign in with Google</google-button>
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
import FormSubmitButton from "@/components/buttons/FormSubmitButton.vue";
import GoogleButton from "@/components/buttons/GoogleButton.vue";
import { useRegisterStore } from "@/stores/useRegister";
import axios from "@/config/axios/index.js";

import { Form as FormVee } from "vee-validate";
import { mapWritableState } from "pinia";

export default {
  components: {
    FormVee,
    BaseInput,
    FormModal,
    FormSubmitButton,
    GoogleButton,
  },
  computed: {
    ...mapWritableState(useRegisterStore, [
      "name",
      "email",
      "password",
      "password_confirmation",
    ]),
  },
  methods: {
    onSubmit() {
      axios
        .post("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((response) => {
          alert("Registration Successful!");
          console.log(response.data.message);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
