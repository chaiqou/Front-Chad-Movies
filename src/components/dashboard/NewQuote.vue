<template>
  <div v-if="!toggleModal" class="w-full flex items-center space-x-12">
    <button
      :class="[toggleDropdown ? 'md:w-48' : 'md:w-2/3']"
      class="text-white flex items-center md:bg-[#222030] h-12 rounded-lg w-screen"
      @click="setToggleModal"
    >
      <IconAddNewQuote class="ml-3" />
      <span class="ml-4">{{ $t("writenewquote") }}</span>
    </button>
    <div>
      <button v-if="!toggleDropdown" @click="setToggleDropdown">
        <p class="flex items-center invisible md:visible space-x-2 z-10">
          <IconSearch />
          <span class="text-white">{{ $t("searchby") }}</span>
        </p>
      </button>
      <div v-else>
        <div class="invisible md:visible">
          <div class="relative rounded-md">
            <input
              v-model="search.search"
              :class="[toggleDropdown ? 'w-[600px]' : 'w-full']"
              type="text"
              class="block pr-10 text-white border-none bg-inherit p-3 rounded-md"
              :placeholder="$t('enter')"
              @keypress.enter="sendSearchRequest"
            />
            <div class="border border-gray-800 border-b-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AddQuoteModal
    v-if="toggleModal"
    title="write new quote"
    :toggle="setToggleModal"
  >
    <NewQuoteForm />
  </AddQuoteModal>
</template>

<script>
import IconAddNewQuote from "@/components/icons/IconAddNewQuote.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import NewQuoteForm from "@/components/dashboard/NewQuoteForm.vue";
import { ref } from "vue";
import { useSearchDataStore } from "@/stores/useSearchDataStore";
import AddQuoteModal from "../modals/AddQuoteModal.vue";

export default {
  components: {
    IconAddNewQuote,
    IconSearch,
    NewQuoteForm,
    AddQuoteModal,
  },
  props: {
    sendSearchRequest: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const toggleModal = ref(false);
    const toggleDropdown = ref(false);

    function setToggleModal() {
      toggleModal.value = !toggleModal.value;
    }
    function setToggleDropdown() {
      toggleDropdown.value = !toggleDropdown.value;
    }

    const search = useSearchDataStore();

    return {
      toggleModal,
      toggleDropdown,
      setToggleModal,
      setToggleDropdown,
      search,
    };
  },
};
</script>
