<script setup>

import { ref } from 'vue';
const isShow =  ref(false);

import panelTime from './panel/time.vue'

</script>

<template>
  <div class="co-contain">
    <div :class="['panel-wrapper', {'is-open': isShow}]">
      <div id = "showPanel" @click="isShow = !isShow"></div>
      <div class = "panel">
        <div class="panel-time">
          <panel-time/>
        </div>
        <div class="panel-user">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.co-contain {
  width: 100%;
  height: 100%;
}

.panel-wrapper {
  position: fixed;
  top: 3rem;
  right: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  transform: translateX(31rem);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.panel-wrapper.is-open {
  transform: translateX(0);
}

#showPanel {
  background: url("@/assets/co-panel-buttom-show.svg");
  background-size: 100% 100%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.panel-wrapper.is-open #showPanel {
  background: url("@/assets/co-panel-buttom-show-back.svg") no-repeat center center;
  background-size: 100% 100%;
}

.panel {
  width: 30rem;
  height: 39rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
}

.panel-time {
  width: 100%;
  height: 4rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
}

.panel-user {
  width: 100%;
  height: 6rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
}

</style>