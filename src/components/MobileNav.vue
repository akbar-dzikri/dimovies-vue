<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);

const openMobileNav = () =>{
    isOpen.value = !isOpen.value;
    console.log(isOpen.value)
}
</script>


<template>
  <div class="mobile-nav">
    <button @click="openMobileNav">
      <span>Menu</span>
    </button>
  </div>
</template>

<style scoped>
button {
    all: unset;
    cursor: pointer;
}
</style>