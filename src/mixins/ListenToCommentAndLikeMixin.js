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
      console.log(event);
      this.quotedata.comments.unshift(event.comment);
      this.quotedata.comments_count++;
    });

    const channel = window.Echo.private(
      `notification.${this.quotedata.user.id}`
    );

    channel
      .subscribed(() => {
        console.log("subscribed");
        console.log(this.quotedata.user.id);
      })
      .listen("NotificationEvent", (event) => {
        this.unread.unshift(event);
        this.unreadCount++;
        console.log(event);
        console.log("mushaobs");
      });
  },
};
