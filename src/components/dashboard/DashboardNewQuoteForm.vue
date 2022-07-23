<template>
  <FormVee
    class="space-y-6"
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
    <Field v-model="movie_id" as="select" rules="required" name="moviename">
      <option v-for="data in movies" :key="data.id" :value="data.id">
        {{ JSON.stringify(data.title.en) }}
      </option>
    </Field>
    <div v-if="thumbnail">
      <img :src="thumbnail" alt="movieimages" height="40" />
    </div>

    <button
      :disabled="form_submmiting"
      class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
    >
      {{ form_submmiting ? "Please wait..." : "Add Quote" }}
    </button>
  </FormVee>
</template>

<script>
import { Form as FormVee, Field } from "vee-validate";
import MovieInput from "../form/MovieInput.vue";
import axios from "@/config/axios/index";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
  },

  data() {
    return {
      movies: [],
    };
  },

  computed: {
    ...mapWritableState(useAddQuoteStore, [
      "form_submmiting",
      "quote_en",
      "quote_ka",
      "thumbnail",
      "getQuoteData",
      "movie_id",
    ]),
  },

  mounted() {
    axios.get("movies").then((response) => {
      this.movies = response.data.data;
    });
  },

  methods: {
    // for mixins
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

      fields.append("quote_en", this.quote_en);
      fields.append("quote_ka", this.quote_ka);
      fields.append("thumbnail", this.thumbnail);
      fields.append("movie_id", this.movie_id);

      axios
        .post("/quotes", fields)
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
