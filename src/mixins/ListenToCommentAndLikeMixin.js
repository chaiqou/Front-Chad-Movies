export default {
  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },
  async created() {
    await window.Echo.channel(`like`).listen("LikeEvent", (event) => {
      if (this.quotedata.id === event.id) {
        event.type == 1 ? this.likeCount++ : this.likeCount--;
      }
    });
    await window.Echo.channel(`comment`).listen("CommentEvent", (event) => {
      if (this.quotedata.id === event.comment.quote_id) {
        this.quotedata.comments.unshift(event);
        this.quotedata.comments_count++;
      }
    });

    const channel = await window.Echo.private(
      `notification.${this.quotedata.user.id}`
    );

    await channel.listen("NotificationEvent", (event) => {
      if (this.quotedata.id === event.message.quote_id) {
        this.unread.unshift(event);
        this.unreadCount++;
      }
    });

    const likeChannel = window.Echo.private(
      `likeNotification.${this.quotedata.user.id}`
    );

    await likeChannel.listen("LikeNotificationEvent", (event) => {
      if (this.quotedata.id === event.message.quote_id) {
        this.unread.unshift(event);
        this.unreadCount++;
      }
    });
  },
};
