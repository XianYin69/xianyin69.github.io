<script setup>
import { useLang, setLang } from "@/lang.js";
const { t } = useLang()
import { computed } from "vue"
const langList = computed(() => {
  const currentText = t('languages');
  return Array.isArray(currentText) ? currentText : []
})
const handleSwitch = (langId) => {
  setLang(langId)
}
import item from "@/components/item-lang.vue"
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['close'])
const closeMenu = () => {
  emit('close')
}
</script>

<template>
  <div v-show="show" class="lang-menu">
    <img class="close-icon"
         src="@/assets/close.svg"
         @click="closeMenu"
         alt="close">
    <div class="menu">
      <item
          v-for="lang in langList"
          :key="lang.id"
          :item-data="lang"
          @click="handleSwitch(lang.id)"
          style="cursor: pointer; position: static; width: auto"
      />
    </div>
  </div>
</template>

<style scoped>
.lang-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 4rem;
  left: 2rem;
  gap: 1rem;
  background: #0077B6;
  width: 40rem;
  height: auto;
  z-index: 99;
}
.close-icon {
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0.5rem;
  left: 37rem;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  bottom: 0.2rem;
  width: 30rem;
  left: 5rem;
}
</style>