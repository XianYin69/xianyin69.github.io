<script setup>
import item from "@/components/item.vue"
//读取内容
import projectItem from '@/assets/projects.json'
</script>

<template>
  <div class="link">
    <item
      v-for="item in projectItem"
      :key="item.id"
      :item-data="item"
    />
  </div>
</template>

<style scoped>
.link {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>