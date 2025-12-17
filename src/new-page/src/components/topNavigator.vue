<script setup>
import { defineEmits, defineProps } from 'vue';
const emits = defineEmits(['change-page']);
const props = defineProps(['currentActive']);
const emitChange = (pageName) => {
  emits('change-page', pageName);
};
import { useLang } from "@/lang.js";
const { t } = useLang();
</script>

<template>
  <div class="topNavigator">
    <div id="Info" @click="emitChange('infoPage')" :class=" { active: currentActive === 'infoPage'}">{{ t('topNavigator.home') }}</div>
    <div id="Project" @click="emitChange('projectPage')" :class="{ active: currentActive === 'projectPage'}">{{ t('topNavigator.project') }}</div>
    <div id="Link" @click="emitChange('linkPage')" :class="{ active: currentActive === 'linkPage'}">{{ t('topNavigator.link') }}</div>
  </div>
</template>

<style>
.topNavigator {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  font-size: 2rem;
  background: #ADE8F4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

#Info:hover {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Project:hover {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Link:hover {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 720px) {
  .topNavigator   {
    gap: 5rem;
    font-size: 2rem;
  }
}
</style>