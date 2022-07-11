<template>
  <FormVee class="mt-10 min-w-screen space-y-8">
    <MovieInput name="name" placeholder="Movie name" />
    <MovieInput name="სახელი" placeholder="ფილმის სახელი" />
    <MovieInput name="director" placeholder="Director" />
    <MovieInput name="რეჟისორი" placeholder="რეჟისორი" />
    <MovieInput name="description" placeholder="Movie Description" />
    <MovieInput name="აღწერა" placeholder="ფილმის აღწერა" />
  </FormVee>
</template>

<script>
import { Form as FormVee } from "vee-validate";
import MovieInput from "./MovieInput.vue";

export default {
  components: {
    FormVee,
    MovieInput,
  },
};
</script>
