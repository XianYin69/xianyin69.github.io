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
  <nav class="top-nav-container">
    <div class="topNavigator">
      <div id="Project" @click="emitChange('projectPage')" :class="{ active: currentActive === 'projectPage'}">{{ t('topNavigator.project') }}</div>
      <div id="Link" @click="emitChange('linkPage')" :class="{ active: currentActive === 'linkPage'}">{{ t('topNavigator.link') }}</div>
      <div id="Info" @click="emitChange('infoPage')" :class="{ active: currentActive === 'infoPage'}">{{ t('topNavigator.info') }}</div>
    </div>
  </nav>
</template>

<style scoped>
.top-nav-container {
  width: fit-content;
  height: 3.4rem;
  display: flex;
  align-items: center;
  background: url("@/assets/background-top-navigator.svg") no-repeat left center;
  background-size: 100% 100%;

  position: relative;
}

.topNavigator {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  margin-left: 5rem;
}

.topNavigator > div {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #1aa8d3;
  text-shadow: 0 0 4px rgba(225, 225, 225, 0.8);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;
  position: relative;
}

.topNavigator > div:hover {
  color: #00B4D8;
  transform: translateY(-2px) scale(1.05);
  text-shadow: 0 0 12px rgb(65 212 255), 0 0 4px #fff;
}

.active {
  font-size: 1.75rem !important;
  color: #06dfdf !important;
  transform: translateY(-2px) scale(1.08);
  text-shadow: 0 0 15px rgb(167 251 249), 0 0 2px rgba(255, 255, 255, 1);
  position: relative;
}

.active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 10%;
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, #08dfdf, #00f5ff);
  border-radius: 2px;
  box-shadow: 0 0 8px #61edff;
}

</style>