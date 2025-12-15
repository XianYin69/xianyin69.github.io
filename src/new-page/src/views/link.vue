<script setup>
import item from "@/components/item.vue";
import { useLang } from "@/lang.js";
const { t } = useLang();
import { computed } from "vue";
const linkList = computed(() => {
  const currentTexts = t('links');
  return Array.isArray(currentTexts) ? currentTexts : []
})
</script>

<template>
  <div class="links">
    <item
      v-for="item in linkList"
      :key="item.id"
      :item-data="item"
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