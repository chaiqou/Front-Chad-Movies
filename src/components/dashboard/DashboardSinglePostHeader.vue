<template>
  <header class="flex justify-between items-center p-4 mt-6">
    <div class="flex items-center space-x-4">
      <router-link
        :to="{
          name: 'edit-quote-page',
          params: { id: quotedata.id },
        }"
      >
        <IconEdit />
      </router-link>
      <div class="border-r-2">|</div>
      <button @click="deleteQuote(quotedata.id)">
        <IconDelete />
      </button>
    </div>
    <div class="invisible md:visible text-white font-medium text-xl">
      View quote
    </div>
    <div>
      <button @click="closeSinglePostPage">
        <IconExit />
      </button>
    </div>
  </header>
</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconExit from "@/components/icons/IconExit.vue";
import axios from "@/config/axios/index";
export default {
  components: {
    IconDelete,
    IconEdit,
    IconExit,
  },
  props: {
    quotedata: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteQuote(quote_id) {
      axios.delete(`quotes/` + quote_id).then(() => {
        this.$router.back();
      });
    },
    closeSinglePostPage() {
      this.$router.back();
    },
  },
};
</script>
