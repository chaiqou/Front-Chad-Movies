<template>
  <div>Log in with google</div>
</template>

<script>
import { useAuthToken } from "@/stores/useAuthToken.js";
import { useLoginStore } from "@/stores/useLogin";
import { mapActions } from "pinia";
export default {
  created() {
    this.login();
  },
  methods: {
    ...mapActions(useLoginStore, ["loginGoogleCallbackAction"]),
    ...mapActions(useAuthToken, ["setToken", "clearToken"]),

    login() {
      this.loginGoogleCallbackAction({
        code: this.$route.query.code,
      }).then((response) => {
        if (response.data.access_token) {
          this.setToken(response.data.access_token);
          this.$router.push({ name: "dashboard-page" });
        } else {
          this.clearToken();
          this.$router.push({ name: "login-page" });
        }
      });
    },
  },
};
</script>
