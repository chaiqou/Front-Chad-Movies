export default {
  methods: {
    getUserProfilePhoto() {
      let profileImage =
        this.profile_image.length > 100
          ? this.profile_image
          : this.backurl + this.profile_image;

      return profileImage;
    },

    selectFile(event) {
      let file = event.target.files[0];
      this.profile_image = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        this.profile_image = e.target.result;
      };

      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    },
  },
};
