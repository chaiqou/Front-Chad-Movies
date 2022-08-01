export default {
  methods: {
    selectImage(event) {
      let file = event.target.files[0];
      this.thumbnail = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        this.thumbnail = e.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
