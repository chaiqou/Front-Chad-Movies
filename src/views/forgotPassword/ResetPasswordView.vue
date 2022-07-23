<template>
  <form-modal>
    <template #major-text>Create new password</template>
    <template #minor-text
      >Your new password must be different from previous used
      passwords</template
    >
    <FormVee class="space-y-2" @submit="updateNewPassword">
      <base-input
        v-model="password"
        label="Password"
        error-name="password"
        name="password"
        rules="required|min:8|max:15|lower-case"
        type="password"
        placeholder="At least 8 & max.15 lower case characters"
      />
      <base-input
        v-model="password_confirmation"
        label="Confirm Password"
        error-name="confirm"
        rules="required|confirmed:@password"
        type="password"
        placeholder="Confirm password"
      />

      <div class="mt-5 sm:mt-6 items-center text-center">
        <button
          :disabled="form_submmiting"
          class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          {{ form_submmiting ? "Please wait..." : "Reset password" }}
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
      password: "",
      password_confirmation: "",
    };
  },

  methods: {
    updateNewPassword() {
      axios
        .post(
          "reset-password?" +
            "resetToken" +
            this.$route.query.token +
            "&email=" +
            this.$route.query.email,
          {
            password: this.password,
            password_confirmation: this.password_confirmation,
            resetToken: this.$route.query.token,
            email: this.$route.query.email,
          }
        )
        .then(() => {
          this.form_submmiting = false;
          this.$router.push("/reset-password-success");
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
