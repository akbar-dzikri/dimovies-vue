<script setup lang="ts">
import MovieCard from "../components/MovieCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

interface Movies {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
}
const movies = ref<Movies[] | null>(null);
const apiKey = import.meta.env.VITE_API_READ_TOKEN;

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + apiKey,
  },
};
const getMovies = async () => {
  await axios
    .request(options)
    .then((response) => {
      movies.value = response.data.results;
      console.log(response.data.results);
    })
    .catch((error) => {
      console.error(error);
    });
};
onMounted(() => {
  getMovies();
});
</script>

<template>
  <h1>This is the home view</h1>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :data="movie" />
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
</style>
