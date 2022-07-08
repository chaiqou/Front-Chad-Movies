<template>
  <div>
    <h1 class="text-white">DASHBOARD PAGE</h1>
    <button @click="logout">LOG OUT BABY</button>
  </div>
</template>

<script>
import axios from "@/config/axios/index";
import { mapActions, mapWritableState } from "pinia";
import { useAuthTokenStore } from "@/stores/useAuthTokenStore";
export default {
  computed: {
    ...mapWritableState(useAuthTokenStore, ["token"]),
  },

  methods: {
    ...mapActions(useAuthTokenStore, ["setToken", "clearToken"]),
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
