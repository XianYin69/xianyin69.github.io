<script setup>
import item from "@/components/item.vue"
import {onMounted, ref} from "vue";
//读取语言
const items = ref([])
onMounted(async() => {
  try {
    const response = await fetch('/projects.json')
    if (!response.ok) throw new Error(response.error);
    items.value = await response.json();
  } catch (error) {
    console.error("Loading error")
  }
})
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