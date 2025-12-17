<script setup>
import { useLang } from "@/lang.js";
const { t } = useLang();
</script>

<template>
  <div class="buttonNavigator">
    <div class="tips">
      <p id="tip">{{ t( 'bottonNavigator.title' ) }}</p>
      <img id = "moreLang" src="@/assets/more-lang.svg" alt="more-lang">
    </div>
    <div class="mediumMess">
      <div class="github">
        <img id="github" src="@/assets/github.svg" alt="github">
        <a id = "XianYin69" href="https://github.com/xianyin69">{{ t( 'bottonNavigator.github' ) }}</a>
      </div>
      <div class="email">
        <img id="Email" src="@/assets/email.svg" alt="email">
        <a id = "email" href="mailto:www324608yf@outlook.com">{{ t('bottonNavigator.email') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttonNavigator{
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  font-size: 1.3rem;
  background: #9FE4F2;
  width: 100%;
  .tips {
    #tip {
      font-size: 3rem;
      font-weight: bold;
      background: #FFFFFF;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      border-left: 0.2rem;
    }
  }
  #moreLang {
    position: relative;
    width: 2rem;
    height: 2rem;
  }
  .mediumMess {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #0096C7;
    width: 100%;
    padding-left: 0.5rem;
    font-weight: bold;
    .github {
      position: relative;
      top: 0.2rem;
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
      background: #FFFFFF;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    #email {
      background: #FFFFFF;
      background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  }

}
@media (max-width: 720px) {
  .buttonNavigator {
    height: 4rem;
    font-size: 0.7rem;
    .tips {
      #tip {
        font-size: 1rem;
      }
    }
  }
}
</style>