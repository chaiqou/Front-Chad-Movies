<template>
  <div>Log in with google</div>
</template>

<script>
import { useLoginStore } from "@/stores/useLogin";
import { mapActions } from "pinia";
export default {
  created() {
    this.login();
  },
  methods: {
    ...mapActions(useLoginStore, ["loginGoogleCallbackAction"]),

    login() {
      this.loginGoogleCallbackAction({
        code: this.$route.query.code,
      }).then((response) => {
        if (response.data.access_token) {
          this.$router.push({ name: "dashboard-page" });
        } else {
          this.$router.push({ name: "login-page" });
        }
      });
    },
  },
};
</script>
