<template>
  <div class="text-white">{{ $route.params.userId }}</div>
  <div>{{ user }}</div>
</template>

<script>
// import axios from "@/config/axios";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  computed: {
    ...mapWritableState(useUserProfileStore, ["user", "loading"]),
  },
  // methods: {
  //   updateUser() {
  //     axios
  //       .put(
  //         `users/${localStorage.getItem("userId")}`,
  //         {
  //           email: this.user.email,
  //           password: this.user.password,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.user = response.data;
  //         this.loading = false;
  //       })
  //       .catch(() => {
  //         this.loading = false;
  //       });
  //   },
  // },
};
</script>
