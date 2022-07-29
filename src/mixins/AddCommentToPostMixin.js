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
      axios({
        method: "post",
        url: "quotes/" + this.quotedata.id + "/comment",
        data: {
          body: this.commentBody,
        },
        headers: {
          "X-Socket-Id": window.Echo.socketId(),
        },
      }).then(() => {
        this.commentBody = "";
      });
    },
  },
};
