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
  background: #48CAE4;
}
#content {
  position: relative;
  padding: 1rem;
  font-size: 2rem;
  white-space: pre-wrap;
  background: #FFFFFF;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>