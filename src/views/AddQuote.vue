<template>
  <div class="mt-12">
    <DashboardSidebar />
  </div>
  <DashboardTimeline>
    <div v-if="toggle">
      <CrudModal :toggle="toggleQuote" title="Add quote">
        <QuoteForm />
      </CrudModal>
    </div>
  </DashboardTimeline>
</template>

<script>
import CrudModal from "@/components/modals/CrudModal.vue";
import QuoteForm from "@/components/form/QuoteForm.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    CrudModal,
    QuoteForm,
    DashboardSidebar,
    DashboardTimeline,
  },
  computed: {
    ...mapWritableState(useAddMovieStore, ["toggle"]),
  },

  methods: {
    toggleQuote() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
