<template>
  <div class="flex flex-col h-screen overflow-y-hidden">
    <DashboardLayout />
  </div>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
// import axios from "@/config/axios/index";
// import { mapWritableState } from "pinia";
// import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  components: { DashboardLayout },
  // computed: {
  //   ...mapWritableState(useUserProfileStore, ["user", "loading"]),
  // },
  // created() {
  //   this.getUser();
  // },

  // methods: {
  //   async getUser() {
  //     await axios
  //       .get("users/", {
  //         params: {
  //           userId: this.$route.params.userId,
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //         this.user = response.data.data;
  //         this.loading = false;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         this.loading = false;
  //       });
  //   },
  // },
};
</script>
