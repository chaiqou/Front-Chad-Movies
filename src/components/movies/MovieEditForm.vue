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
      @change="selectImage"
    />
    <div v-if="thumbnail">
      <img :src="getMoviePhoto()" alt="movieimages" height="240" width="600" />
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
import BaseSelect from "@/components/form/BaseSelect.vue";
import axios from "@/config/axios/index";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
import SelectImageMixin from "@/mixins/SelectImageMixin";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    BaseSelect,
  },
  mixins: [SelectImageMixin],
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
    ...mapWritableState(useUserProfileStore, ["backurl"]),
  },
  mounted() {
    axios.get("movies/" + this.$route.params.id).then((res) => {
      this.budget = res.data.data.budget;
      this.description_en = res.data.data.description["en"];
      this.description_ka = res.data.data.description["ka"];
      this.director_en = res.data.data.director["en"];
      this.director_ka = res.data.data.director["ka"];
      this.title_en = res.data.data.title["en"];
      this.title_ka = res.data.data.title["ka"];
      this.genre = res.data.data.genre;
      this.year = res.data.data.year;
      this.thumbnail = res.data.data.thumbnail;
    });
  },

  created() {
    axios.get("genres").then((response) => {
      this.genresOption = response.data.data;
    });
  },

  methods: {
    getMoviePhoto() {
      let moviePhoto =
        this.thumbnail.length > 50
          ? this.thumbnail
          : this.backurl + this.thumbnail;

      return moviePhoto;
    },

    onSubmitForm() {
      this.form_submmiting = true;

      let fields = new FormData();
      for (let key in this.getMovieData) {
        fields.append(key, this.getMovieData[key]);
      }

      axios
        .put(`/movies/${this.$route.params.id}`, this.getMovieData)
        .then(() => {
          this.form_submmiting = false;
          this.toggle = false;
          this.$router.back();
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
