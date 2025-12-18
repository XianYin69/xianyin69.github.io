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
  'developing': '#F9C744',
  'complete': '#90BE6D',
  'discard': '#F77038',
  'available': '#90BE6D',
  'unavailable': '#F77038',
  'testing': '#5986B0',
  '开发中': '#F9C744',
  '已发布': '#90BE6D',
  '已废弃': '#F77038',
  '可用': '#90BE6D',
  '不可用': '#F77038',
  '测试中': '#5986B0'
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
  left: 5rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 42rem;
  font-size: 2rem;
  font-weight: bold;
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
</style>