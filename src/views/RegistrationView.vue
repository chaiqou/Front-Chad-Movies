<template>
  <form-modal>
    <template v-slot:major-text>Create an account</template>
    <template v-slot:minor-text>Start your journey!</template>
    <FormVee class="space-y-3" @submit="onSubmit">
      <base-input
        label="Name"
        errorName="name"
        rules="required|min:3|max:15|lower-case"
        type="text"
        placeholder="Enter your name"
        v-model="name"
      />
      <base-input
        label="Email"
        errorName="email"
        rules="required|email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
      <base-input
        label="Password"
        errorName="password"
        name="password"
        rules="required|min:8|max:15|lower-case"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <base-input
        label="Confirm Password"
        errorName="confirm"
        rules="required|confirmed:@password"
        type="password"
        placeholder="Password"
        v-model="password_confirmation"
      />
      <div class="mt-5 sm:mt-6 items-center text-center">
        <form-submit-button>Get started</form-submit-button>
        <google-button>Sign in with Google</google-button>
      </div>
    </FormVee>
    <template v-slot:have-account>
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
      console.log("test");
    },
  },
};
</script>
