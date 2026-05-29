<script setup>
import infoPage from '@/views/info.vue'
import projectPage from '@/views/projects.vue'
import linkPage from '@/views/link.vue'
import blogPage from '@/views/blog.vue'
import {computed, ref} from "vue";
import topNavigator from '@/components/topNavigator.vue'
import BottomNavigator from '@/components/bottomNavigator.vue'
import Panel from '@/components/panel.vue'


const currentPageName = ref('blogPage')
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
    case 'blogPage':
      return blogPage;
    default:
      return infoPage;
  }
})


window.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});

window.addEventListener('mousedown', () => {
  document.documentElement.style.setProperty('--mouse-scale', '0.8');
});

window.addEventListener('mouseup', ()=>{
  document.documentElement.style.setProperty('--mouse-scale', '1');
});
</script>

<template>
  <div class="main">
    <topNavigator @change-page="changePage" :current-active="currentPageName"/>
    <div class="page">
      <component :is="currentComponent"></component>
    </div>
    <panel/>
    <BottomNavigator />
    <div class="glow"></div>
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
  cursor: none !important;
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

.page {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

:root {
  --mouse-x: 0px;
  --mouse-y: 0px;
}

.glow {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;

  width: 4rem;
  height: 4rem;

  transform: translate3d(calc(var(--mouse-x) - 2rem), calc(var(--mouse-y) - 2rem), 0) scale3d(var(--mouse-scale, 1), var(--mouse-scale, 1), 1);

  background: url("@/assets/cursor.svg") no-repeat center center;
  background-size: cover;

  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);

}

</style>