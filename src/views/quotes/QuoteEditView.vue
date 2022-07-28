<template>
  <div class="hidden md:visible mt-12">
    <DashboardSidebar />
  </div>
  <EditModal>
    <QuoteEditForm />
  </EditModal>
</template>

<script>
import QuoteEditForm from "@/components/quotes/QuoteEditForm.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import EditModal from "@/components/modals/EditModal.vue";
import { mapWritableState } from "pinia";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: {
    QuoteEditForm,
    DashboardSidebar,
    EditModal,
  },

  computed: {
    ...mapWritableState(useMovieListStore, ["currentMovie"]),
  },
};
</script>
