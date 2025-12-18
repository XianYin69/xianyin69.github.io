<script setup>
import content from '@/components/context.vue'
</script>

<template>
  <div class="body">
    <div class="Info">
      <img src="https://avatars.githubusercontent.com/u/62499077?s=400&u=02bcf0c0bfed7fe870fa265369260f81c89a7fc3&v=4" alt="">
      <content />
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
  width: auto;
  height: 100%;
  margin: 0.1rem;
  .Info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: auto;
    height: 80%;
  }
  img {
    margin-left: 2rem;
    width: 15rem;
    height: 15rem;
    position: relative;
  }
}
</style>