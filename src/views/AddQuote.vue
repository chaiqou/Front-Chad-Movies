<template>
  <DashboardSidebar />
  <DashboardTimeline>
    <Teleport v-if="toggle" to="body">
      <CrudModal :toggle="toggleQuote" title="Add quote">
        <QuoteForm />
      </CrudModal>
    </Teleport>
  </DashboardTimeline>
</template>

<script>
import CrudModal from "@/components/modals/CrudModal.vue";
import QuoteForm from "@/components/form/QuoteForm.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";
import { Teleport } from "vue";

export default {
  components: {
    CrudModal,
    QuoteForm,
    DashboardSidebar,
    DashboardTimeline,
    Teleport,
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
