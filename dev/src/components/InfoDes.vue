<script setup>
import { useLang } from "@/lang.js";
const { t } = useLang()

const props = defineProps({
  itemData: {
    type: Object,
    required: true
  }
});

import {computed, ref, watchEffect} from "vue";
const isShowURL1 = ref(false);
const isShowURL2 = ref(false);
const isShowURL3 = ref(false);
const isShowNote1 = ref(false);
const isShowNote2 = ref(false);
const isShowNote3 = ref(false);

watchEffect(() => {
  if (props.itemData) {
    isShowURL1.value = !!props.itemData.isShowURL1;
    isShowURL2.value = !!props.itemData.isShowURL2;
    isShowURL3.value = !!props.itemData.isShowURL3;
    isShowNote1.value = !!props.itemData.isShowNote1;
    isShowNote2.value = !!props.itemData.isShowNote2;
    isShowNote3.value = !!props.itemData.isShowNote3;
  }
});

const stateColorMap = {
  'developing': '#F9C744',
  'released': '#90BE6D',
  'discord': '#F77038',
  'available': '#90BE6D',
  'unavailable': '#F77038',
}

const stateBackgroundStyle = computed(() => {
  const currentState = props.itemData.state;
  const background = stateColorMap[currentState];
  return {
    background: background
  }
})

</script>

<template>
  <div class="stateDes">
    <div class="line1">
      <div class="status">
        <a id="status">{{ t("Status") }}</a>
        <a id="statusDes">{{ t("projectState." + props.itemData.state) }}</a>
        <div id="color-status" :style = "stateBackgroundStyle"></div>
      </div>
    </div>
    <div class="line2">
      <div class="url">
        <a id="url-1" v-if="isShowURL1">url:{{ props.itemData.Url1 }}</a>
        <a id="url-2" v-if="isShowURL2">url:{{ props.itemData.Url2 }}</a>
        <a id="url-3" v-if="isShowURL3">url:{{ props.itemData.Url3 }}</a>
      </div>
    </div>
    <div class="line3">
      <div class="Note">
        <a id="note-1" v-if="isShowNote1">{{ props.itemData.Note1 }}</a>
        <a id="note-2" v-if="isShowNote2">{{ props.itemData.Note2 }}</a>
        <a id="note-3" v-if="isShowNote3">{{ props.itemData.Note3 }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stateDes {
  width: 30rem;
  height: auto;
  position: relative;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  left: 8rem;
}
.line1 {
  top: 0.3rem;
  left: 1rem;
  width: 10rem;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.status {
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
}

.line2 {
  left: 1rem;
  width: 10rem;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.line3 {
  left: 1rem;
  width: 10rem;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

a {
  font-size: 1rem;
  font-weight: normal;
  background: #0077b6;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#color-status {
  width: 2rem;
  height: 1rem;
  background: #90be6d;
  margin-top: 0.2rem;
}
</style>