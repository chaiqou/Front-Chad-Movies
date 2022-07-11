<template>
  <FormVee class="mt-10 min-w-screen space-y-8">
    <MovieInput name="name" placeholder="Movie name" />
    <MovieInput name="სახელი" placeholder="ფილმის სახელი" />
    <BaseSelect v-model="selectedGenre" name="genres" :options="genres" />
    <MovieInput name="director" placeholder="Director" />
    <MovieInput name="რეჟისორი" placeholder="რეჟისორი" />
    <MovieInput name="description" placeholder="Movie Description" />
    <MovieInput name="აღწერა" placeholder="ფილმის აღწერა" />
  </FormVee>
</template>

<script>
import { Form as FormVee } from "vee-validate";
import MovieInput from "./MovieInput.vue";
import BaseSelect from "./BaseSelect.vue";
import axios from "@/config/axios/index";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    FormVee,
    MovieInput,
    BaseSelect,
  },
  computed: {
    ...mapWritableState(useAddMovieStore, ["genres", "selectedGenre"]),
  },

  created() {
    axios.get("genres").then((response) => {
      console.log(response);
      this.genres = response.data.data;
    });
  },
};
</script>
