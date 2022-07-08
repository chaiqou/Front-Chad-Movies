<template>
  <div>Log in with google</div>
</template>

<script>
import { useAuthTokenStore } from "@/stores/useAuthTokenStore.js";
import { useLoginStore } from "@/stores/useLoginStore";
import { mapActions } from "pinia";
import axios from "@/config/axios/index";
export default {
  created() {
    this.login();
  },

  methods: {
    ...mapActions(useLoginStore, ["loginGoogleCallbackAction"]),
    ...mapActions(useAuthTokenStore, ["setToken", "clearToken"]),

    login() {
      this.loginGoogleCallbackAction({
        code: this.$route.query.code,
      }).then((response) => {
        if (response.data.access_token) {
          this.setToken(response.data.access_token);
          axios.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.access_token}`;
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
