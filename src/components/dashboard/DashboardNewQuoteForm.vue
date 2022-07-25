<template>
  <FormVee
    class="space-y-6"
    enctype="multipart/form-data"
    @submit="onSubmitForm"
  >
    <MovieInput
      v-model="quote_en"
      name="quote_en"
      placeholder="Start create new quote"
      rules="required"
      error-name="English quote"
      class="placeholder-[#6C757D]"
    />
    <MovieInput
      v-model="quote_ka"
      name="quote_ka"
      placeholder="ახალი ციტატა"
      rules="required"
      error-name="ქართული ციტატა"
      class="placeholder-[#6C757D]"
    />
    <div
      class="w-full h-10 flex whitespace-nowrap justify-left py-6 items-center text-white space-x-2 border border-gray-600 rounded-md"
      :class="[active ? 'bg-[#9747FF66]' : '']"
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drop.prevent="dragAndDropFile"
      @change="selectFile"
    >
      <span class="ml-3"> <IconCamera /></span>

      <span>Drag or drop File or</span>
      <label class="p-1 text-white bg-[#9747FF66] font-bold" for="dropzone"
        >Choose File</label
      >
      <Field
        id="dropzone"
        type="file"
        name="thumbnail"
        class="hidden"
        rules="required"
      />
    </div>
    <div class="appearance-none outline-0 shadow-0 border-none">
      <Field
        v-model="movie_id"
        as="select"
        rules="required"
        name="moviename"
        class="w-full bg-inherit text-white bg-[#000000] appearance-none outline-0 rounded-lg shadow-0"
      >
        <option value="" disabled selected>
          <p class="text-white">
            <IconVideo />
            <span class="text-white hidden"> Choose Movie </span>
          </p>
        </option>
        <option v-for="data in movies" :key="data.id" :value="data.id">
          {{ data.title.en }}
        </option>
      </Field>
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
import { Form as FormVee, Field } from "vee-validate";
import MovieInput from "../form/MovieInput.vue";
import axios from "@/config/axios/index";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";
import IconCamera from "../icons/IconCamera.vue";
import IconVideo from "../icons/IconVideo.vue";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
    IconCamera,
    IconVideo,
  },

  data() {
    return {
      movies: [],
      active: false,
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
    selectFile(event) {
      let file = event.target.files[0];
      this.thumbnail = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
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

    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>
