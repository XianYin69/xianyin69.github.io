<script setup>
import item from "@/components/item.vue"
import items from "@/assets/link.json"
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>