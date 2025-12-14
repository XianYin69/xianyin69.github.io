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
const props = defineProps({
  itemData: {
    type: Object,
    required: true,
    default: () => ({ project: 'Default Item', url: '#', state: 'unknown'})
  }
})
//state 背景色
const stateColorMap = {
  'developing': '#FFC107',
  'complete': '#4CAF50',
  'discard': '#F44336',
}
const stateBackgroundStyle = computed(() => {
  const currentState = props.itemData.state;
  const background = stateColorMap[currentState];
  return {
    background: background
  };
});
</script>

<template>
  <div class="item">
    <div id="item">
      <a id="itemID" :href="props.itemData.url">{{ props.itemData.project || props.itemData.link }}</a>
    </div>
    <div id="state"
         :style="stateBackgroundStyle"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave">
      <p id="stateID">{{ props.itemData.state }}</p>
    </div>
  </div>
  <stateDes id="stateDes" v-if="isHoveringState"/>
</template>

<style scoped>
.item {
  position: relative;
  left: 3rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 42rem;
  font-size: 2rem;
  font-weight: bold;
}
#state {
  width: 21rem;
}
#item {
  background: #4280D9;
  width: 19rem;
}
#itemID {
  background: #AAD0F1;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 5%;
  left: 5%;
}
#stateID {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: -70%;
  right: -45%;
  width: auto;
}
</style>