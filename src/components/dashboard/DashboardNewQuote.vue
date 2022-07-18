<template>
  <div class="w-full flex items-center space-x-12">
    <button
      :class="[toggleDropdown ? 'w-48' : 'w-2/3']"
      class="text-white flex items-center bg-[#222030] h-12 rounded-lg"
    >
      <IconAddNewQuote class="ml-3" />
      <span class="ml-4"> Write new quote</span>
    </button>
    <div>
      <button v-if="!toggleDropdown" @click="setToggleDropdown">
        <p class="flex items-center invisible md:visible space-x-2 z-10">
          <IconSearch />
          <span class="text-white">Search by</span>
        </p>
      </button>
      <div v-else>
        <div class="invisible md:visible">
          <div class="relative rounded-md">
            <input
              v-model="search"
              :class="[toggleDropdown ? 'w-[600px]' : 'w-full']"
              type="text"
              class="block pr-10 text-white border-none bg-inherit p-3 rounded-md"
              placeholder="Enter @ to search movies, Enter # to search quotes"
            />
            <div class="border border-gray-800 border-b-1"></div>
          </div>
        </div>
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
  data() {
    return {
      toggleDropdown: false,
    };
  },
  methods: {
    setToggleDropdown() {
      this.toggleDropdown = !this.toggleDropdown;
    },
  },
};
</script>
