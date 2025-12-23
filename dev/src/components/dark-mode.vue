<script setup>
import { ref, onMounted } from 'vue';
const isDark = ref(false);
const toggleDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true;
    document.documentElement.classList.remove('dark');
  }
})
</script>

<template>
  <img src="@/assets/modeSwitcher.svg" alt="modeSwitcher" />
</template>

<style scoped>
img {
  width: 2rem;
  height: 2rem;
}
</style>