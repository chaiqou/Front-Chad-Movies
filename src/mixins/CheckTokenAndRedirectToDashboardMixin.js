import axios from "@/config/axios/index";

export default {
  mounted() {
    if (localStorage.getItem("auth") !== null) {
      axios
        .post("checkToken", {
          token: this.token,
        })
        .then((response) => {
          if (response) {
            this.$router.push({ name: "dashboard-page" });
          }
        });
    }
  },
};
