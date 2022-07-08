<template>
  <div>
    <h1 class="text-white">DASHBOARD PAGE</h1>
  </div>
</template>

<script>
import axios from "@/config/axios/index";
export default {
  methods: {
    logout() {
      axios.post("api/logout");
    },
  },
};
</script>
