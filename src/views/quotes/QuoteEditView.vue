<template>
  <div class="mt-12">
    <DashboardSidebar />
  </div>
  <DashboardTimeline>
    <EditModal>
      <QuoteEditForm />
    </EditModal>
  </DashboardTimeline>
</template>

<script>
import QuoteEditForm from "@/components/quotes/QuoteEditForm.vue";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import EditModal from "@/components/modals/EditModal.vue";
export default {
  components: {
    QuoteEditForm,
    DashboardSidebar,
    DashboardTimeline,
    EditModal,
  },
};
</script>
