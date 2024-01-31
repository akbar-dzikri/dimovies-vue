<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@import '@/assets/css/main.css';
header {
  /* line-height: 1.5; */
  background: var(--background);
  top: 0;
  width: 100%;
  z-index: 10;
  position: sticky;
}

main{
  padding: 1rem 2rem;
}
</style>