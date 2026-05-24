<script setup>
import content from '@/components/context.vue'
</script>

<template>
  <div class="body">
    <div class="Info">
      <div id="img">
        <img src="https://avatars.githubusercontent.com/u/62499077?s=400&u=02bcf0c0bfed7fe870fa265369260f81c89a7fc3&v=4" alt="">
      </div>
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
  background-size: 90% auto;
  .Info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: auto;
    height: 80%;
  }

  #img {
    width: 9rem;
    height: 9rem;
    margin-left: 2rem;
    background: url("@/assets/backgroud-card.svg") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
  }

  img {
    width: 8rem;
    height: 8rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
}
</style>