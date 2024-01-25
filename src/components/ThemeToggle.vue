<script setup lang="ts">
import { onMounted, watch } from 'vue';

const getTheme = (): string => {
    const storedTheme = localStorage.getItem("theme");
    if (typeof storedTheme === "string") {
        return storedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
    }
    return "light";
};

let theme: string = getTheme();

const changeTheme = () => {
    document.documentElement.setAttribute('data-theme', theme);
};

const setTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    changeTheme();
    console.log(theme);
};

onMounted(() => {
    changeTheme();
});

watch(() => theme, () => {
    changeTheme();
});
</script>

<template>
    <div class="theme-toggle">
        <svg class="icon light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
            </path>
        </svg>
        <label class="toggle-switch">
            <input type="checkbox" name="theme-controller" @change="setTheme" :checked="theme === 'dark'">
            <div class="slider"></div>
        </label>
        <svg class="icon dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z">
            </path>
        </svg>
    </div>
</template>

<style>
input{
    display: none;
}

.theme-toggle {
    display: flex;
    align-items: center;
    gap: .5rem;
    --icon-size: 24px; /* Adjust the size as needed */
    --icon-margin: 8px; /* Adjust the margin as needed */
}

.icon {
    fill: var(--text);
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px; /* Adjust the width for responsiveness */
    height: 24px;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--text);
    border-radius: 12px; /* Adjust the border-radius for a rounded appearance */
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px; /* Adjust the height for responsiveness */
    width: 20px; /* Adjust the width for responsiveness */
    left: 2px; /* Adjust the position for responsiveness */
    bottom: 2px; /* Adjust the position for responsiveness */
    background-color: var(--background);
    border-radius: 50%;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--text);
}

input:checked + .slider:before {
    transform: translateX(16px); /* Adjust the translation for responsiveness */
}

@media (max-width: 480px) {
    .toggle-switch {
        width: 30px; /* Adjust the width for smaller screens */
    }

    .slider:before {
        height: 16px; /* Adjust the height for smaller screens */
        width: 16px; /* Adjust the width for smaller screens */
        left: 2px; /* Adjust the position for smaller screens */
        bottom: 2px; /* Adjust the position for smaller screens */
    }

    input:checked + .slider:before {
        transform: translateX(12px); /* Adjust the translation for smaller screens */
    }
}
</style>
