<script setup>
import { defineEmits, defineProps } from 'vue';
const emits = defineEmits(['change-page']);
const props = defineProps(['currentActive']);
const emitChange = (pageName) => {
  emits('change-page', pageName);
};
</script>

<template>
  <div class="topNavigator">
    <div id="Info" @click="emitChange('infoPage')" :class=" { active: currentActive === 'infoPage'}">首页</div>
    <div id="Project" @click="emitChange('projectPage')" :class="{ active: currentActive === 'projectPage'}">项目</div>
    <div id="Link" @click="emitChange('linkPage')" :class="{ active: currentActive === 'linkPage'}">链接</div>
  </div>
</template>

<style>
.topNavigator {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  font-size: 2rem;
  background: #4286D9;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

#Info:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Project:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Link:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 720px) {
  .topNavigator {
    gap: 5rem;
    font-size: 2rem;
  }
}
</style>