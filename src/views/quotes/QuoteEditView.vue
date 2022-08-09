<template>
  <div class="hidden md:visible mt-12">
    <Sidebar />
  </div>
  <EditModal>
    <QuoteEditForm />
  </EditModal>
</template>

<script>
import QuoteEditForm from "@/components/quotes/QuoteEditForm.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import EditModal from "@/components/modals/EditModal.vue";
import { mapWritableState } from "pinia";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: {
    QuoteEditForm,
    Sidebar,
    EditModal,
  },

  computed: {
    ...mapWritableState(useMovieListStore, ["currentMovie"]),
  },
};
</script>
