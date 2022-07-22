export default {
  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },
  created() {
    window.Echo.channel(`likeChannel`).listen("LikeEvent", (event) => {
      if (this.quotedata.id === event.id) {
        event.type == 1 ? this.likeCount++ : this.likeCount--;
      }
    });
    window.Echo.channel(`commentChannel`).listen("CommentEvent", (event) => {
      this.quotedata.comments.unshift(event.comment);
      this.quotedata.comments_count++;
    });
  },
};
