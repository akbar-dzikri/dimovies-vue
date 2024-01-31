<script setup lang="ts">
import MovieCard from "../components/MovieCard.vue";
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

interface Movies {
  id: number;
  poster_path?: string;
  title: string;
  overview: string;
}
const currPage = ref(1);
const movies = ref<Movies[] | null>(null);
const apiKey = import.meta.env.VITE_API_READ_TOKEN;

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?page=" + currPage.value,
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + apiKey,
  },
};
const isLoading = ref(false);

const getMovies = async () => {
  try {
    isLoading.value = true;
    const response = await axios.request(options);
    movies.value = response.data.results;
    console.log(response.data.results);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  watch(
  () => currPage.value,
  () => {
    getMovies();
    console.log(currPage.value);
  }
);
});
</script>

<template>
  <h1>Popular</h1>
  <div class="movie-list">
    <p v-if="isLoading">Loading...</p>
    <MovieCard v-else v-for="movie in movies" :data="movie" />
  </div>
  <div class="bottom-btn">
    <button type="button" @click="currPage--">Prev</button>
    <span>{{ currPage }}</span>
    <button type="button" @click="currPage++">Next</button>
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
.bottom-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
