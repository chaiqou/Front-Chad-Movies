<template>
  <div class="w-full flex items-center">
    <button
      class="text-white flex items-center bg-[#222030] w-2/3 h-12 rounded-lg"
    >
      <IconAddNewQuote class="ml-3" />
      <span class="ml-4"> Write new quote</span>
    </button>
    <div class="relative rounded-md w-1/3">
      <input
        v-model="search"
        type="text"
        class="block w-1/3 pr-10 text-white border-none bg-inherit p-3 rounded-md"
      />
      <div
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <p class="flex items-center invisible md:visible space-x-2 z-10">
          <IconSearch />
          <span class="text-white">Search by</span>
        </p>
      </div>
    </div>
  </div>

  <CrudModal v-if="false">
    <FormVee
      class="mt-2 min-w-screen space-y-6"
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
  </CrudModal>
</template>

<script>
import { Form as FormVee, Field } from "vee-validate";
import CrudModal from "@/components/modals/CrudModal.vue";
import MovieInput from "@/components/form/MovieInput.vue";
import IconAddNewQuote from "../icons/IconAddNewQuote.vue";
import IconSearch from "../icons/IconSearch.vue";
export default {
  components: {
    FormVee,
    Field,
    CrudModal,
    MovieInput,
    IconAddNewQuote,
    IconSearch,
  },
};
</script>
