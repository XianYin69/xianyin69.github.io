<script setup>
//状态说明
import InfoDes from "@/components/InfoDes.vue"
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
  </div>
  <InfoDes id="stateDes" v-if="isHoveringState"/>
</template>

<style scoped>
.item {
  position: relative;
  left: 5rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 40rem;
  font-size: 2rem;
  font-weight: bold;
  transition: width 0.2s, height 0.2s, font-weight 0.2s;
}

#item {
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 40rem;
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

div:hover {

}

</style>