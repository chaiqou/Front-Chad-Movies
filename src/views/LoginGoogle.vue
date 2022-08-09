<template>
  <div>Log in with google</div>
</template>

<script>
import { useLoginStore } from "@/stores/useLoginStore";
import { mapActions } from "pinia";
import axios from "@/config/axios/index";
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
          localStorage.setItem("jwt_token", response.data.access_token);
          axios.defaults.headers[
            "Authorization"
          ] = `Bearer ${response.data.access_token}`;
          this.$router.push({ name: "dashboard-page" });
        } else {
          localStorage.removeItem("jwt_token");
          this.$router.push({ name: "login-page" });
        }
      });
    },
  },
};
</script>
