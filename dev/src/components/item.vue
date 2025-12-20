<script setup>
//状态说明
import stateDes from "@/components/stateDes.vue"
import { ref,computed } from 'vue'
const isHoveringState = ref(false)
let hoverTimeout = null;
const HOVER_DELAY = 1000;
const handleMouseEnter = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
  }
  hoverTimeout = setTimeout(() => {
    isHoveringState.value = true
  }, HOVER_DELAY);
};
const handleMouseLeave = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
  isHoveringState.value = false
}
//状态
const props = defineProps(['itemData'])
//state 背景色
const stateColorMap = {
  'developing': '#F9C744',
  'released': '#90BE6D',
  'discord': '#F77038',
  'available': '#90BE6D',
  'unavailable': '#F77038',
  'testing': '#5986B0'
}
const stateBackgroundStyle = computed(() => {
  const currentState = props.itemData.state;
  const background = stateColorMap[currentState];
  return {
    background: background
  };
});
//翻译
import { useLang } from "@/lang.js";
const { t } = useLang();
</script>

<template>
  <div class="item">
    <div id="item">
      <a id="itemID" :href="props.itemData.url">{{ itemData.id }}</a>
    </div>
    <div id="state"
         :style="stateBackgroundStyle"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave">
      <p id="stateID">{{ t('projectState.' + itemData.state) }}</p>
    </div>
  </div>
  <stateDes id="stateDes" v-if="isHoveringState"/>
</template>

<style scoped>
.item {
  position: relative;
  left: 5rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 42rem;
  font-size: 2rem;
  font-weight: bold;
  transition: width 0.2s, height 0.2s, font-weight 0.2s;
}
#state {
  width: 15rem;
}
#item {
  background: #0096C7;
  width: 32rem;
}
#itemID {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 5%;
  left: 5%;
  text-decoration-line: none;
}
#stateID {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: -70%;
  left: 5%;
  width: auto;
}
.item:hover {
  height: 3.7rem;
  width: 47rem;
  font-size: 2.5rem;
}
</style>