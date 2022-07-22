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
      likedPost: this.quotedata.liked,
      likeCount: this.quotedata.likes_count,
    };
  },

  methods: {
    likePost() {
      this.likedPost ? this.decrementLike() : this.incrementLike();
      this.likedPost = !this.likedPost;
    },
    incrementLike() {
      axios.post("like/" + this.quotedata.id);
    },
    decrementLike() {
      axios.delete("like/" + this.quotedata.id);
    },
  },
};
