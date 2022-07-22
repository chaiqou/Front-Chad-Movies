export default {
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
  created() {
    window.Echo.channel(`likeChannel`).listen("LikeEvent", (event) => {
      if (this.quote.id === event.id) {
        event.type == 1 ? this.likeCount++ : this.likeCount--;
      }
    });
    window.Echo.channel(`commentChannel`).listen("CommentEvent", (event) => {
      this.quote.comments.unshift(event.comment);
      this.quote.comments_count++;
    });
  },
};
