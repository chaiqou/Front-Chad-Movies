import axios from "@/config/axios/index";

export default {
  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentBody: "",
    };
  },
  methods: {
    addComment() {
      axios
        .post("quotes/" + this.quotedata.id + "/comment", {
          body: this.commentBody,
        })
        .then(() => {
          this.commentBody = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
