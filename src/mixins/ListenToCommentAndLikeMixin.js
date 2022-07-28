export default {
  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },
  created() {
    window.Echo.channel(`like`).listen("LikeEvent", (event) => {
      if (this.quotedata.id === event.id) {
        event.type == 1 ? this.likeCount++ : this.likeCount--;
      }
    });
    window.Echo.channel(`comment`).listen("CommentEvent", (event) => {
      if (this.quotedata.id === event.comment.quote_id) {
        this.quotedata.comments.unshift(event.comment);
        this.quotedata.comments_count++;
      }
    });

    const channel = window.Echo.private(
      `notification.${this.quotedata.user.id}`
    );

    channel.listen("NotificationEvent", (event) => {
      if (this.quotedata.id === event.message.quote_id) {
        this.unread.unshift(event);
        this.unreadCount++;
      }
    });
  },
};
