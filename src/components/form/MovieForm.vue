<template>
  <FormVee
    class="mt-10 min-w-screen space-y-8"
    enctype="multipart/form-data"
    @submit="onSubmitForm"
  >
    <MovieInput v-model="title.en" name="name" placeholder="Movie name" />
    <MovieInput v-model="title.ka" name="სახელი" placeholder="ფილმის სახელი" />
    <BaseSelect v-model="genre" name="genres" :options="genresOption" />
    <MovieInput v-model="director.en" name="director" placeholder="Director" />
    <MovieInput v-model="director.ka" name="რეჟისორი" placeholder="რეჟისორი" />
    <MovieInput
      v-model="description.en"
      name="description"
      placeholder="Movie Description"
    />
    <MovieInput
      v-model="description.ka"
      name="აღწერა"
      placeholder="ფილმის აღწერა"
    />
    <MovieInput v-model="budget" name="budget" placeholder="Movie budget" />
    <MovieInput v-model="year" name="year" placeholder="Movie year" />
    <Field
      v-model="photo"
      type="file"
      name="photo"
      class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
    />
    <button
      class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
    >
      Add movie
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
      "description",
      "director",
      "genre",
      "title",
      "toggle",
      "year",
      "photo",
    ]),
  },

  created() {
    axios.get("genres").then((response) => {
      this.genresOption = response.data.data;
    });
  },

  methods: {
    onSubmitForm() {
      axios
        .post("movies", {
          budget: this.budget,
          description: this.description,
          director: this.director,
          genre: this.genre,
          title: this.title,
          year: this.year,
          user_id: 1,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
