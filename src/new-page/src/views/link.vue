<script setup>
import itemLink from "@/assets/links.json"
import item from "@/components/item.vue";
</script>

<template>
  <div class="links">
    <item
      v-for="item in itemLink"
      :key="item.id"
      :item-data="item"
    />
  </div>
</template>

<style scoped>
.links {
  width: 100%;
  height: 100%;
}
</style>