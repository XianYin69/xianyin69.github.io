<script setup>
import itemBlog from "@/components/item-blog.vue";
import contextBlog from "@/components/context-blog.vue";
import {ref} from 'vue';

const tabs = {
  item: itemBlog,
  context: contextBlog
}

const currentTab = ref('item')

const switchComponent = (target) =>
{
  if (tabs[target]) {
    currentTab.value = target;
  }
}

</script>

<template>
  <div class="body">
    <div class="blog">
      <component :is="tabs[currentTab]" @switch="switchComponent"></component>
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

  .blog {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    background: url("@/assets/backgroud-card.svg") no-repeat center center;
    background-size: 100% 100%;
    width: 40rem;
    height: auto;
    margin-left: 7rem;
  }
}
</style>