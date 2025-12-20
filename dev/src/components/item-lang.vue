<script setup>
import { defineProps } from "vue";
const props = defineProps({
  itemData: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="item-lang">
    <div class="lang-box">
      <span class="lang-title">{{ itemData.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.item-lang {
  position: absolute;
  left: 5rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  background: #0096C7;
  width: 12rem;
}
.lang-box {
  width: 12rem;
}
.lang-title {
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 5%;
  left: 5%;
}
</style>