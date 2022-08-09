<template>
  <div class="mt-12">
    <Sidebar />
  </div>
  <Timeline>
    <div v-if="toggle">
      <CrudModal :toggle="toggleQuote" title="Add quote">
        <QuoteForm />
      </CrudModal>
    </div>
  </Timeline>
</template>

<script>
import CrudModal from "@/components/modals/CrudModal.vue";
import QuoteForm from "@/components/form/QuoteForm.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Timeline from "@/components/dashboard/Timeline.vue";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    CrudModal,
    QuoteForm,
    Sidebar,
    Timeline,
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
