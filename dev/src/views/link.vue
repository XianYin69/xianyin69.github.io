<script setup>
import item from "@/components/item.vue"
import {onMounted, ref} from 'vue'
const items = ref([])
onMounted(async () => {
  try {
    const response = await fetch('/links.json')
    if (!response.ok) throw new Error(response.error)
    items.value = await response.json()
  } catch (error) {
    console.error("Loading error")
  }
})
</script>

<template>
  <div class="links">
    <item
      v-for="link in items"
      :key="link.id"
      :item-data="link"
    />
  </div>
</template>

<style scoped>
.links {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>