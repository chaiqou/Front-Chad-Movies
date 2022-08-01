<template>
  <FormVee
    class="mt-2 min-w-screen space-y-6"
    enctype="multipart/form-data"
    @submit="onSubmitQuoteForm"
  >
    <MovieInput
      v-model="quote_en"
      name="quote_en"
      placeholder="Quote"
      rules="required|english-keyboard"
      error-name="quote_en"
    />
    <MovieInput
      v-model="quote_ka"
      name="quote_ka"
      placeholder="ციტატა"
      rules="required|georgian-keyboard"
      error-name="quote_ka"
    />
    <Field
      type="file"
      name="thumbnail"
      class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
      rules="required"
      @change="selectImage"
    />
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
import MovieInput from "@/components/form/MovieInput.vue";
import axios from "@/config/axios/index";
import { useAddQuoteStore } from "@/stores/useAddQuoteStore";
import { mapWritableState } from "pinia";
import SelectImageMixin from "@/mixins/SelectImageMixin";

export default {
  components: {
    FormVee,
    Field,
    MovieInput,
  },
  mixins: [SelectImageMixin],
  computed: {
    ...mapWritableState(useAddQuoteStore, [
      "form_submmiting",
      "quote_en",
      "quote_ka",
      "thumbnail",
      "getQuoteData",
    ]),
  },

  methods: {
    onSubmitQuoteForm() {
      this.form_submmiting = true;

      let fields = new FormData();
      for (let key in this.getQuoteData) {
        fields.append(key, this.getQuoteData[key]);
      }
      fields.append("movie_id", this.$route.params.id);

      axios.post("/quotes", fields).then(() => {
        this.form_submmiting = false;
        this.$router.back();
      });
    },
  },
};
</script>
