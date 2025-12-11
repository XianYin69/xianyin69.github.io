<script setup>
import infoPage from '@/views/info.vue'
import projectPage from '@/views/projects.vue'
import linkPage from '@/views/link.vue'
import {computed, ref} from "vue";
import topNavigator from '@/components/topNavigator.vue'
const currentPageName = ref('infoPage')
const changePage = (page) => {
  currentPageName.value = page;
}
const currentComponent = computed(() => {
  switch (currentPageName.value) {
    case 'infoPage':
      return infoPage;
      case 'projectPage':
        return projectPage;
        case 'linkPage':
          return linkPage;
          default:
            return infoPage;
  }
})
</script>

<template>
  <topNavigator @change-page="changePage" :current-active="currentPageName"/>
  <main>
    <component :is="currentComponent" />
  </main>
</template>

<style scoped>

</style>