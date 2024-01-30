<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <nav class="nav-content">
        <RouterLink to="/" class="branding">
            <span><span>Di</span>Movies</span>
        </RouterLink>
        <ul class="nav-links">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/movies" class="nav-link">Movies</RouterLink>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
            <RouterLink to="/credits" class="nav-link">Credits</RouterLink>
            <ThemeToggle />
        </ul>
    </nav>
</template>

<style scoped>
.nav-content {
    background: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: .5px solid var(--border);


    span {
        font-size: 1.5rem;
        font-weight: 700;

        span{
            font-size: 2rem;
            color: var(--primary);

        }
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .nav-content {
        .nav-links {
            display: none;
        }
    }

}
</style>