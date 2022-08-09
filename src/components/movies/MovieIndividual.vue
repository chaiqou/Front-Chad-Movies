<template>
  <DashboardLayout />
  <DashboardTimeline
    v-if="!loading"
    header="Movie description"
    class="overflow-y-scroll overflow-x-hidden p-4"
  >
    <div class="md:flex container mx-auto mt-4">
      <img
        class="md:w-1/2 md:h-72 w-screen rounded-lg"
        :src="backurl + currentMovie[0].thumbnail"
        alt="moviephoto"
      />
      <div class="ml-2 md:ml-12">
        <div class="md:flex md:items-center md:justify-between">
          <h1 class="text-[#DDCCAA] font-medium text-2xl mt-4">
            {{ currentMovie[0].title["en"] }} ({{ currentMovie[0].year }})
          </h1>
          <div
            class="items-center ml-16 flex space-x-3 bg-[#24222F] p-4 rounded-lg invisible md:visible"
          >
            <button @click="delete_movie(currentMovie[0].id)">
              <IconDelete />
            </button>
            <div class="border-r-2">|</div>
            <router-link
              :to="{
                name: 'edit-movie-page',
                params: { id: currentMovie[0].id },
              }"
            >
              <IconEdit />
            </router-link>
          </div>
        </div>
        <p
          class="text-white bg-gray-500 inline-block p-1 rounded-lg font-bold mt-2 md:mt-4"
        >
          {{ currentMovie[0].genre }}
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Director:
          <span class="text-white font-medium ml-2">{{
            currentMovie[0].director["en"]
          }}</span>
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Budget:
          <span class="text-white font-medium ml-2">{{
            currentMovie[0].budget
          }}</span>
        </p>
        <p class="text-white font-normal mt-4">
          {{ currentMovie[0].description["en"] }}
        </p>
      </div>
    </div>
    <div class="mt-6 md:flex items-center space-x-2 space-y-8 md:space-y-0">
      <p class="text-white ml-2">
        Quotes (Total {{ currentMovie[0].quotes.length }})
      </p>
      <span class="text-gray-500 invisible md:visible">|</span>
      <button
        type="button"
        class="items-center inline-flex justify-center rounded-md px-2 py-2 bg-[#E31221] text-base font-medium text-white"
        @click="goToAddQuote"
      >
        <IconAddButton />
        <p class="ml-2">Add Quote</p>
      </button>
    </div>
    <QuoteCard
      v-for="quote in currentMovie[0].quotes"
      :key="quote.id"
      :quote="quote"
    />
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import axios from "@/config/axios/index";
import IconDelete from "@/components/icons/IconDelete.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconAddButton from "@/components/icons/IconAddButton.vue";
import QuoteCard from "@/components/quotes/QuoteCard.vue";

import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    IconDelete,
    IconEdit,
    IconAddButton,
    QuoteCard,
  },

  computed: {
    ...mapWritableState(useMovieListStore, [
      "currentMovie",
      "backurl",
      "loading",
    ]),
    ...mapWritableState(useAddMovieStore, ["toggle"]),
  },

  created() {
    this.getMovieBySlug(this.$route.params.id);
  },

  methods: {
    async getMovieBySlug() {
      await axios
        .get(`movie-slug/${this.$route.params.id}`)
        .then((response) => {
          this.currentMovie = response.data.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    delete_movie(currentMovie_id) {
      axios.delete(`movies/` + currentMovie_id).then(() => {
        this.$router.push({ name: "movies-page" });
      });
    },
    goToAddQuote() {
      this.toggle = !this.toggle;
      this.$router.push(`/movie/add-quote/${this.currentMovie[0].id}`);
    },
  },
};
</script>
