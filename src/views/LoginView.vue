<template>
  <form-modal>
    <template v-slot:major-text>Log in to your account</template>
    <template v-slot:minor-text
      >Welcome back! Please enter your details.</template
    >
    <Form class="space-y-3">
      <base-input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        :value="name"
        @input="onInput"
      />
      <base-input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        :value="name"
        @input="onInput"
      />
      <BaseCheckbox label="Remember me" />
      <div class="mt-5 sm:mt-6 items-center text-center">
        <form-submit-button>Sign in</form-submit-button>
        <google-button>Sign in with Google</google-button>
      </div>
    </Form>
    <template v-slot:have-account>
      <router-link class="text-[#0D6EFD] underline" to="/login"
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

export default {
  components: {
    BaseInput,
    BaseCheckbox,
    FormModal,
    FormSubmitButton,
    GoogleButton,
  },
};
</script>
