<template>
  <FormVee
    class="mt-2 min-w-screen space-y-6"
    enctype="multipart/form-data"
    @submit="onSubmitForm"
  >
    <MovieInput
      v-model="quote_en"
      name="quote_en"
      placeholder="Quote"
      rules="required"
      error-name="English Quote"
    />
    <MovieInput
      v-model="quote_ka"
      name="quote_ka"
      placeholder="ციტატა"
      rules="required"
      error-name="ქართული ციტატა"
    />
    <BaseDragAndDrop
      :select-file="selectFile"
      :active="active"
      :toggle-active="toggleActive"
      :drag-and-drop-file="dragAndDropFile"
    >
      <Field
        id="dropzone"
        v-model="thumbnail"
        type="file"
        name="thumbnail"
        class="hidden"
        rules="required"
      />
    </BaseDragAndDrop>

    <div v-if="thumbnail">
      <img
        :src="getUserProfilePhoto()"
        alt="movieimages"
        height="240"
        width="600"
      />
    </div>

    <button
      :disabled="form_submmiting"
      class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
    >
      {{ form_submmiting ? "Please wait..." : "Save changes" }}
    </button>
  </FormVee>
</template>

<script>
import { Form as FormVee, Field } from "vee-validate";
import MovieInput from "@/components/form/MovieInput.vue";
import axios from "@/config/axios/index";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";
import { useEditQuoteStore } from "@/stores/useEditQuoteStore";
import BaseDragAndDrop from "../form/BaseDragAndDrop.vue";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    BaseDragAndDrop,
  },

  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapWritableState(useAddQuoteStore, [
      "quote_en",
      "quote_ka",
      "movie_id",
      "thumbnail",
      "form_submmiting",
      "getQuoteData",
    ]),
    ...mapWritableState(useEditQuoteStore, ["backurl"]),
  },

  mounted() {
    this.fetchAppropiateQuote();
  },

  methods: {
    getUserProfilePhoto() {
      let profileImage =
        this.thumbnail.length > 50
          ? this.thumbnail
          : this.backurl + this.thumbnail;

      return profileImage;
    },

    selectFile(event) {
      let file = event.target.files[0];
      this.thumbnail = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        this.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    dragAndDropFile(event) {
      let file = event.dataTransfer.files[0];
      this.thumbnail = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    onSubmitForm() {
      this.form_submmiting = true;

      let fields = new FormData();
      for (let key in this.getQuoteData) {
        fields.append(key, this.getQuoteData[key]);
      }

      axios
        .put(`/quotes/${this.$route.params.id}`, this.getQuoteData)
        .then(() => {
          this.form_submmiting = false;
          this.toggle = false;
          this.$router.back();
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
    fetchAppropiateQuote() {
      if (!this.$route.params.id) {
        console.log("loading");
      } else {
        axios.get(`/quotes/${this.$route.params.id}`).then((res) => {
          this.quote_en = res.data.data.quote.quote.en;
          this.quote_ka = res.data.data.quote.quote.ka;
          this.movie_id = res.data.data.movie.id;
          this.thumbnail = res.data.data.thumbnail;
        });
      }
    },

    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>
