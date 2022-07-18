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
export default {
  components: {
    FormVee,
    Field,
    MovieInput,
  },
};
</script>
