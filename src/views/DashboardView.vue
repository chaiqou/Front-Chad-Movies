<template>
  <div>
    <h1 class="text-white">DASHBOARD PAGE</h1>
    <button @click="logout">LOG OUT BABY</button>
  </div>
</template>

<script>
import axios from "@/config/axios/index";
import { mapActions, mapWritableState } from "pinia";
import { useAuthToken } from "@/stores/useAuthToken";
export default {
  computed: {
    ...mapWritableState(useAuthToken, ["token"]),
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "reload_page");
      location.reload();
    }
  },

  methods: {
    ...mapActions(useAuthToken, ["setToken", "clearToken"]),
    logout() {
      axios
        .post("logout", {
          token: this.token,
        })
        .then(() => {
          this.clearToken();
          this.$router.push({ name: "home-page" });
        });
    },
  },
};
</script>
