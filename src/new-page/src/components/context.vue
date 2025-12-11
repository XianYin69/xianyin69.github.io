<script setup>
import sourceData from '@/assets/mainConten.json'
</script>

<template>
  <div class="content">
    <div id="content" v-html="sourceData.content"></div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  width: auto;
  height: auto;
  background: #4280D9;
}
#content {
  position: relative;
  padding: 1rem;
  font-size: 2rem;
  white-space: pre-wrap;
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>