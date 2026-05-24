<script setup>
import { useLang } from "@/lang.js";
const { t } = useLang()

const props = defineProps({
  itemData: {
    type: Object,
    required: true
  }
});

import { ref } from "vue";
const isShowURL1 = ref(true);
const isShowURL2 = ref(false);
const isShowURL3 = ref(false);
const isShowNote1 = ref(true);
</script>

<template>
  <div class="stateDes">
    <div class="line1">
      <div class="status">
        <a id="status">{{ t("itemData.Status") }}</a>
        <a id="statusDes">{{ t("itemData.statusLevel") }}</a>
        <div id="color-status"></div>
      </div>
    </div>
    <div class="line2">
      <div class="url">
        <a id="url-1" v-if="isShowURL1">url:{{ t("itemData.Url1") }}</a>
        <a id="url-2" v-if="isShowURL2">url:{{ t("itemData.Url2") }}</a>
        <a id="url-3" v-if="isShowURL3">url:{{ t("itemData.Url3") }}</a>
      </div>
    </div>
    <div class="line3">
      <div class="Note">
        <a id="note-1" v-if="isShowNote1">{{ t("itemData.Note") }}</a>
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
  margin-top: 1rem;
}
</style>