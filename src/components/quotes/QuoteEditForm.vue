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
    <Field
      type="file"
      name="thumbnail"
      class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
      rules="required"
      @change="selectFile"
    />
    <div v-if="thumbnail">
      <img :src="thumbnail" alt="movieimages" height="240" width="600" />
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
import { useEditQuoteStore } from "@/stores/useEditQuoteStore";
import { mapWritableState } from "pinia";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
  },
  computed: {
    ...mapWritableState(useEditQuoteStore, [
      "form_submmiting",
      "quote_en",
      "quote_ka",
      "thumbnail",
      "getQuoteData",
      "backurl",
    ]),
    ...mapWritableState(useMovieListStore, ["currentMovie"]),
  },
  mounted() {
    axios.get("quotes/" + this.$route.params.id).then((res) => {
      this.quote_en = res.data.data[0].quote["en"];
      this.quote_ka = res.data.data[0].quote["ka"];
      this.id = res.data.data[0].id;
      this.thumbnail = res.data.data[0].thumbnail;
    });
  },

  methods: {
    selectFile(event) {
      let file = event.target.files[0];
      this.thumbnail = file;

      let reader = new FileReader();
      reader.onload = (e) => {
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
      fields.append("movie_id", this.currentMovie[0].id);
      axios
        .put(`/quotes/${this.$route.params.id}`, this.getQuoteData)
        .then(() => {
          this.form_submmiting = false;
          this.$router.back();
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
