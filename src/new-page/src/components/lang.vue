<script setup>
import { useLang } from "@/lang.js";
const { t } = useLang()
import { computed } from "vue"
const langList = computed(() => {
  const currentText = t('Lang');
  return Array.isArray(currentText) ? currentText : []
})
import item from "@/components/item.vue"
</script>
<div class="langButton">
  <item
      v-for="lang in langList"
      :key="lang.id"
      :item-data="lang"
      />
</div>
<template>

</template>

<style scoped>

</style>