<script setup>
import item from "@/components/item.vue"
//读取语言
import { useLang } from "@/lang.js";
const { t } = useLang();
import { computed } from "vue";
const projectList = computed(() => {
  const currentTexts = t('projects');
  return Array.isArray(currentTexts) ? currentTexts : []
})
</script>

<template>
  <div class="link">
    <item
      v-for="item in projectList"
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