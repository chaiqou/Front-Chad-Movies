<template>
  <div class="mt-12"><DashboardSidebar /></div>
  <div class="overflow-y-auto">
    <DashboardTimeline>
      <CrudModal
        v-if="!toggleModal"
        title="Edit movie"
        :toggle="setToggleModal"
      >
        <MovieEditForm />
      </CrudModal>
    </DashboardTimeline>
  </div>
</template>

<script>
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import MovieEditForm from "@/components/movies/MovieEditForm.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import CrudModal from "@/components/modals/CrudModal.vue";

export default {
  components: {
    DashboardSidebar,
    MovieEditForm,
    DashboardTimeline,
    CrudModal,
  },
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {
    setToggleModal() {
      this.toggleModal = !this.toggleModal;
    },
  },
};
</script>
