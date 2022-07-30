<template>
  <FormVee
    class="mt-2 space-y-6"
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
    <Multiselect
      v-model="selectedGenre"
      mode="tags"
      :limit="10"
      :max="3"
      :close-on-select="false"
      :searchable="true"
      :options="genresOption"
      @change="updateSelectedGenres"
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
      <img :src="thumbnail" alt="movieimages" height="40" width="600" />
    </div>

    <button
      :disabled="form_submmiting"
      class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
    >
      {{ form_submmiting ? `${$t("pleasewait")}` : `${$t("addmovie")}` }}
    </button>
  </FormVee>
</template>

<script>
import { Form as FormVee, Field } from "vee-validate";
import MovieInput from "./MovieInput.vue";
import axios from "@/config/axios/index";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";
import BaseDragAndDrop from "./BaseDragAndDrop.vue";
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    Multiselect,
    BaseDragAndDrop,
  },

  data() {
    return {
      active: false,
    };
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

  async created() {
    await axios.get("genres").then((response) => {
      const optionsForGenres = response.data.data.map((genre) => {
        return {
          label: genre.name,
          value: genre.id,
        };
      });
      this.genresOption = optionsForGenres;
    });
  },

  methods: {
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
        this.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    toggleActive() {
      this.active = !this.active;
    },
    updateSelectedGenres(value) {
      value.map((genre) => {
        if (this.genre.includes(genre)) {
          return;
        } else {
          this.genresOption.forEach((option) => {
            if (option.value === genre) {
              if (this.genre.includes(option.label)) {
                return;
              } else {
                this.genre.push(option.label);
              }
            }
          });
        }
      });
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css" />
<style>
body {
  --ms-bg: transparent;
  --ms-tag-bg: #6c757d;
  --ms-border-color: #6c757d;
}

.multiselect-tags-search {
  background-color: inherit;
}
</style>
