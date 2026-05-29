<script setup>

import { ref } from 'vue';
const isShow =  ref(false);
const showCom = ref(false);

import panelTime from './panel/time.vue'
import PanelUser from "@/components/panel/User/panel-user.vue";
import PanelComment from "@/components/panel/Comment/panel-comment.vue";

import {showComments} from "@/blog.js";
import {onMounted, onUnmounted} from "vue";

const handleTabChange = (data) => {
  if (data === "context") {
    showCom.value = true;
    isShow.value = true;
  } else {
    showCom.value = false;
  }
}



onMounted(() => {
  showComments.on('tab-changed', handleTabChange);
})

onUnmounted(()=> {
  showComments.off('tab-changed', handleTabChange);
})

</script>

<template>
  <div class="co-contain">
    <div :class="['panel-wrapper', isShow ? 'is-open' : '']">
      <div id = "showPanel" @click="isShow = !isShow"></div>
      <div class = "panel">
        <div class="panel-time">
          <panel-time/>
        </div>
        <div class="panel-user">
          <panel-user/>
        </div>
        <div class="panel-comment" v-if="showCom">
          <panel-comment/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.co-contain {
  width: auto;
  height: auto;
  position: absolute;
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
  height: 8rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
  align-items: center;
}

.panel-comment {
  width: 100%;
  height: 20rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
}

</style>