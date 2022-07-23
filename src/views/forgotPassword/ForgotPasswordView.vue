<template>
  <form-modal>
    <template #major-text>Forgot Password?</template>
    <template #minor-text
      >Enter the email and we’ll send an email with instructions to reset your
      password</template
    >
    <FormVee class="space-y-2" @submit="sendForgotPasswordEmail">
      <base-input
        v-model="email"
        label="Email"
        error-name="email"
        type="text"
        placeholder="Enter your email"
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
      <router-link to="/login">
        <span class="text-white text-2xl">&larr; </span> Back to log in
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
          this.$router.push("/forgot-password-email-sent");
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
