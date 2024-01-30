<script setup lang="ts">
// define a new props with a name of data, the props has a property of type Movie, with attributes of img url, title, and description
interface Movie {
  id: number;
  poster_path?: string;
  title: string;
  overview: string;
}
const imageUrl = "https://image.tmdb.org/t/p/w500";
defineProps<{ data: Movie }>();
</script>

<template>
  <div class="movie-card">
    <div class="movie-image">
      <img :src="imageUrl + data.poster_path" :alt="data.title" />
    </div>
    <div class="movie-body">
      <h3 class="movie-title">{{ data.title }}</h3>
      <p class="movie-desc">{{ data.overview }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  width: 300px;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px var(--border), 0 2px 4px -1px var(--border);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  .movie-body {
    display: none;
    position: absolute;
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 10px 15px -3px var(--border), 0 4px 6px -2px var(--border);
    transform: scale(1.02);

    .movie-body {
      display: block;
    }
    img {
      filter: brightness(0.5);
    }
  }

  .movie-image {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.1s ease-in-out;
    }
  }

  .movie-body {
    padding: 0.5rem 1rem;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
