export default {
  methods: {
    checkThumbnailLength() {
      let photo =
        this.thumbnail.length > 50
          ? this.thumbnail
          : this.backurl + this.thumbnail;

      return photo;
    },
  },
};
