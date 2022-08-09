<template>
  <div class="mt-12"><Sidebar /></div>
  <div class="overflow-y-auto">
    <Timeline>
      <CrudModal
        v-if="!toggleModal"
        title="Edit movie"
        :toggle="setToggleModal"
      >
        <MovieEditForm />
      </CrudModal>
    </Timeline>
  </div>
</template>

<script>
import Sidebar from "@/components/dashboard/Sidebar.vue";
import MovieEditForm from "@/components/movies/MovieEditForm.vue";
import Timeline from "@/components/dashboard/Timeline.vue";
import CrudModal from "@/components/modals/CrudModal.vue";

export default {
  components: {
    Sidebar,
    MovieEditForm,
    Timeline,
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
