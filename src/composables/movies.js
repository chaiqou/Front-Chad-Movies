import { ref } from "vue";
import axios from "@/config/axios/index";

export default function useMovies() {
  const movies = ref([]);

  const getMovies = async () => {
    const response = await axios.get("api/movies");
    movies.value = response.data.data;
  };

  return {
    movies,
    getMovies,
  };
}
