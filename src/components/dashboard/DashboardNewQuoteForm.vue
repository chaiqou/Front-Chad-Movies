<template>
  <FormVee
    class="mt-2 space-y-6"
    enctype="multipart/form-data"
    @submit="onSubmitForm"
  >
    <MovieInput
      v-model="quote_en"
      name="quote_en"
      placeholder="Start create new quote"
      rules="required|english-keyboard"
      error-name="quote_en"
      class="placeholder-[#6C757D]"
    />
    <MovieInput
      v-model="quote_ka"
      name="quote_ka"
      placeholder="ახალი ციტატა"
      rules="required|georgian-keyboard"
      error-name="quote_ka"
      class="placeholder-[#6C757D]"
    />
    <BaseDragAndDrop
      :toggle-active="toggleActive"
      :drag-and-drop-file="dragAndDropFile"
      :select-file="selectImage"
      :active="active"
    >
      <Field
        id="dropzone"
        v-model="thumbnail"
        type="file"
        name="thumbnail"
        class="hidden"
        rules="required"
      />
      <p class="mt-2 text-sm text-red-500">
        <ErrorMessage name="thumbnail" />
      </p>
    </BaseDragAndDrop>
    <div class="appearance-none outline-0 shadow-0 border-none">
      <Field
        v-model="movie_id"
        as="select"
        rules="required"
        name="movie_name"
        class="w-full bg-inherit text-white bg-[#000000] appearance-none outline-0 rounded-lg shadow-0"
      >
        <option value="" disabled selected>
          <p class="text-white">
            <span class="text-white hidden"> Choose Movie </span>
          </p>
        </option>
        <option v-for="data in movies" :key="data.id" :value="data.id">
          {{ data.title.en }}
        </option>
      </Field>
      <p class="mt-2 text-sm text-red-500">
        <ErrorMessage name="movie_name" />
      </p>
    </div>

    <div v-if="thumbnail">
      <img :src="thumbnail" alt="movieimages" height="40" width="600" />
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
import axios from "@/config/axios/index";
import MovieInput from "@/components/form/MovieInput.vue";
import BaseDragAndDrop from "@/components/form/BaseDragAndDrop.vue";
import SelectImageMixin from "@/mixins/SelectImageMixin";
import DragAndDropMixin from "@/mixins/DragAndDropMixin";

import { Form as FormVee, Field, ErrorMessage } from "vee-validate";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    BaseDragAndDrop,
    ErrorMessage,
  },
  mixins: [SelectImageMixin, DragAndDropMixin],

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
          this.$router.push("/movies");
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
