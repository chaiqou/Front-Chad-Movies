<template>
  <FormVee
    class="mt-2 min-w-screen space-y-6"
    enctype="multipart/form-data"
    @submit="onSubmitForm"
  >
    <MovieInput
      v-model="title_en"
      name="title_en"
      placeholder="Movie name"
      rules="required|min:3"
      error-name="English title"
    />
    <MovieInput
      v-model="title_ka"
      name="title_ka"
      placeholder="ფილმის სახელი"
      rules="required|min:3"
      error-name="ქართული სათაური"
    />
    <BaseSelect
      v-model="genre"
      name="genres"
      :options="genresOption"
      rules="required"
      error-name="Genre"
    />
    <MovieInput
      v-model="director_en"
      name="director_en"
      placeholder="Director"
      rules="required|min:3"
      error-name="Director"
    />
    <MovieInput
      v-model="director_ka"
      name="director_ka"
      placeholder="რეჟისორი"
      rules="required|min:3"
      error-name="რეჟისორი"
    />
    <MovieInput
      v-model="description_en"
      name="description_en"
      placeholder="Movie Description"
      rules="required|min:3|max:255"
      error-name="English description"
    />
    <MovieInput
      v-model="description_ka"
      name="description_ka"
      placeholder="ფილმის აღწერა"
      rules="required|min:3|max:255"
      error-name="ქართული აღწერა"
    />
    <MovieInput
      v-model="budget"
      name="budget"
      placeholder="Movie budget"
      rules="required"
      error-name="Budget"
    />
    <MovieInput
      v-model="year"
      name="year"
      placeholder="Movie year"
      rules="required"
      error-name="Year"
    />
    <Field
      type="file"
      name="thumbnail"
      class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
      rules="required"
      @change="selectFile"
    />
    <div v-if="thumbnail">
      <img :src="thumbnail" alt="movieimages" height="40" />
    </div>

    <button
      :disabled="form_submmiting"
      class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
    >
      {{ form_submmiting ? "Please wait..." : "Add Movie" }}
    </button>
  </FormVee>
</template>

<script>
import { Form as FormVee, Field } from "vee-validate";
import MovieInput from "./MovieInput.vue";
import BaseSelect from "./BaseSelect.vue";
import axios from "@/config/axios/index";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    BaseSelect,
  },
  computed: {
    ...mapWritableState(useAddMovieStore, [
      "selectedGenre",
      "genresOption",
      "budget",
      "description_en",
      "description_ka",
      "director_en",
      "director_ka",
      "title_en",
      "title_ka",
      "genre",
      "toggle",
      "year",
      "thumbnail",
      "form_submmiting",
      "getMovieData",
    ]),
  },

  created() {
    axios.get("genres").then((response) => {
      this.genresOption = response.data.data;
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
      for (let key in this.getMovieData) {
        fields.append(key, this.getMovieData[key]);
      }

      axios
        .post("movies", fields)
        .then(() => {
          this.form_submmiting = false;
          this.toggle = false;
          window.location.reload();
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
