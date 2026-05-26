<script setup>
import { useLang } from "@/lang.js";
const { t } = useLang();
import Lang from "@/components/lang.vue"
import { ref } from "vue";
const isLangOpen = ref(false);
const toggleLang = () => {
  isLangOpen.value = !isLangOpen.value;
}
</script>

<template>
  <div class="buttonNavigator">
      <img id = "moreLang" src="../assets/more-lang.svg" alt="more-lang" @click="toggleLang">
      <Lang
          :show="isLangOpen"
          @close="isLangOpen = false"
      />
      <div class="github">
        <img id="github" src="../assets/github.svg" alt="github">
        <a id = "XianYin69" href="https://github.com/xianyin69">{{ t( 'bottonNavigator.github' ) }}</a>
      </div>
      <div class="email">
        <img id="Email" src="../assets/email.svg" alt="email">
        <a id = "email" href="mailto:www324608yf@outlook.com">{{ t('bottonNavigator.email') }}</a>
      </div>
  </div>
</template>

<style scoped>
.buttonNavigator{
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 1rem;
  width: 100%;
  height: 2rem;
  background: url("@/assets/background-button-navigator.svg") no-repeat center center;
  background-size: 100% 100%;
}

.github {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
}

#github {
  width: 2rem;
  height: 2rem;
}

.email {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
}

#Email {
  width: 2rem;
  height: 2rem;
}

#XianYin69 {
  background: #b2b2b2;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration-line: none;
  font-weight: bold;
  font-style: italic;
}

#email {
  background: #f2f2f2;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration-line: none;
  font-weight: bold;
  font-style: italic;
}

#moreLang {
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-left: 0.8rem;
}
</style>