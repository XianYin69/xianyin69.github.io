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
    <p id="backgroundWord">XianYin69</p>
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
}
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  background: #AAD0F1;
  width: 100%;
  height: 100%;
}

#backgroundWord {
  font-size: 10rem;
  background-color: #E4F5FA;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  bottom: 2rem;
  left: 0.5rem;
  font-style: normal;
  font-weight: bolder;
}
@media (max-width: 720px) {
  #backgroundWord {
    font-size: 5rem;
  }
}
</style>