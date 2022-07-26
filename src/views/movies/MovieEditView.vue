<template>
  <div class="mt-12"><DashboardSidebar /></div>
  <DashboardTimeline>
    <EditModal>
      <MovieEditForm />
    </EditModal>
  </DashboardTimeline>
</template>

<script>
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import EditModal from "@/components/modals/EditModal.vue";
import MovieEditForm from "../../components/movies/MovieEditForm.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";

export default {
  components: { DashboardSidebar, EditModal, MovieEditForm, DashboardTimeline },
};
</script>
