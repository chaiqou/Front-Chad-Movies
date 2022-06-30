<template>
  <form-modal>
    <template v-slot:major-text>Log in to your account</template>
    <template v-slot:minor-text
      >Welcome back! Please enter your details.</template
    >
    <FormVee @submit="onSubmit" class="space-y-3">
      <base-input
        label="Email"
        errorName="email"
        type="text"
        placeholder="Enter your email"
        rules="required|min:3"
        v-model="email"
      />
      <base-input
        label="Password"
        errorName="password"
        type="password"
        rules="required|min:8"
        placeholder="Password"
        v-model="password"
      />
      <div class="flex items-center justify-between">
        <base-checkbox label="Remember me" v-model="remember" />
        <router-link class="text-[#0D6EFD] underline" to="/forgot-password"
          >Forgot password</router-link
        >
      </div>

      <div class="mt-5 sm:mt-6 items-center text-center">
        <form-submit-button>Sign in</form-submit-button>
        <google-button>Sign in with Google</google-button>
      </div>
    </FormVee>
    <template v-slot:have-account>
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
import { useLoginStore } from "@/stores/useLogin";

import { Form as FormVee } from "vee-validate";
import { mapWritableState } from "pinia";

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
  },
  methods: {
    onSubmit() {
      console.log("test");
    },
  },
};
</script>
