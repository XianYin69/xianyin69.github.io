<script setup>
import item from "@/components/item.vue"
//读取语言
import items from "@/assets/projects.json"
</script>

<template>
  <div class="link">
    <item
      v-for="project in items"
      :key="project.id"
      :item-data="project"
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