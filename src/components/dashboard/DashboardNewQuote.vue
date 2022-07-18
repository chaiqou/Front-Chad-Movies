<template>
  <div v-if="!toggleModal" class="w-full flex items-center space-x-12">
    <button
      :class="[toggleDropdown ? 'w-48' : 'w-2/3']"
      class="text-white flex items-center bg-[#222030] h-12 rounded-lg"
      @click="setToggleModal"
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

  <CrudModal v-if="toggleModal">
    <DashboardNewQuoteForm />
  </CrudModal>
</template>

<script>
import IconAddNewQuote from "../icons/IconAddNewQuote.vue";
import IconSearch from "../icons/IconSearch.vue";
import DashboardNewQuoteForm from "./DashboardNewQuoteForm.vue";
import CrudModal from "../modals/CrudModal.vue";
export default {
  components: {
    IconAddNewQuote,
    IconSearch,
    DashboardNewQuoteForm,
    CrudModal,
  },
  data() {
    return {
      toggleDropdown: false,
      toggleModal: false,
    };
  },
  methods: {
    setToggleDropdown() {
      this.toggleDropdown = !this.toggleDropdown;
    },
    setToggleModal() {
      this.toggleModal = !this.toggleModal;
    },
  },
};
</script>
