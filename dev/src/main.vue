<script setup>
import infoPage from '@/views/info.vue'
import projectPage from '@/views/projects.vue'
import linkPage from '@/views/link.vue'
import {computed, ref} from "vue";
import topNavigator from '@/components/topNavigator.vue'
import BottomNavigator from '@/components/bottomNavigator.vue'
const currentPageName = ref('infoPage')
const changePage = (page) => {
  currentPageName.value = page;
}
const currentComponent = computed(() => {
  switch (currentPageName.value) {
    case 'infoPage':
      return infoPage;
    case 'projectPage':
      return projectPage;
    case 'linkPage':
      return linkPage;
    default:
      return infoPage;
  }
})
</script>

<template>
  <div class="main">
    <topNavigator @change-page="changePage" :current-active="currentPageName"/>
    <component :is="currentComponent"></component>
    <BottomNavigator />
  </div>
</template>

<style scoped>
@import url("https://fontsapi.zeoseven.com/69/main/result.css");
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:url('@/assets/background.svg') no-repeat fixed center center;
  background-size: cover;
}

</style>