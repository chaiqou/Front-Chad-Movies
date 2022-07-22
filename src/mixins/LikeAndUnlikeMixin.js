import axios from "@/config/axios/index";

export default {
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      likedPost: this.quote.liked,
      likeCount: this.quote.likes_count,
    };
  },

  methods: {
    likePost() {
      this.likedPost ? this.decrementLike() : this.incrementLike();
      this.likedPost = !this.likedPost;
    },
    incrementLike() {
      axios.post("like/" + this.quote.id).then(() => console.log("gaizarda"));
    },
    decrementLike() {
      axios
        .delete("like/" + this.quote.id)
        .then(() => console.log("shemcirda"));
    },
  },
};
