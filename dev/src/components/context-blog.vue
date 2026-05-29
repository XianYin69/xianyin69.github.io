<script setup>

const emit = defineEmits(['switch'])

const toItem = () => {
  emit('switch', 'item')
}

import {useUserStore} from "@/user.js";
const store = useUserStore();
const isShowBar = store.isLoggedIn;

</script>

<template>
  <div class="context-blog">
    <div id="exit" @click="toItem"></div>
    <div class="head">
      <div id="img-title"></div>
      <div id="title">a</div>
    </div>
    <div class="foot">
      <div class="Editor">
        <div id = "img-editor"></div>
        <div id = "editor-id">a</div>
      </div>
      <div class="time">
        <div id="img-date"></div>
        <div id = "date-time">a</div>
      </div>
    </div>
    <div class="context">
      <div id="blog-context">
        a
      </div>
    </div>
    <div class="featureBar" v-if="isShowBar">
      <div class="favorite">
        <div id="img-favorite"/>
        <div id="text-favorite">收藏</div>
      </div>
      <div class="like">
        <div id="img-like"/>
        <div id="text-like">还行</div>
      </div>
      <div class="shit">
        <div id="img-shit"/>
        <div id="text-shit">屎</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.context-blog {
  width: 85%;
  height: 94%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 2rem;
  gap: 0.5rem;

  overflow-x: hidden;
  overflow-y: auto;
}

#exit {
  background: url("@/assets/close.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 5rem;
  height: 5rem;
}

.head {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 0.4rem;
}

#img-title {
  width: 2rem;
  height: 2rem;
  background: url("@/assets/blog/blog-title.svg") no-repeat center center;
  background-size: cover;
}

#title {
  font-size: 2rem;
  font-weight: bolder;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
}

.context {
  width: 100%;
  height: 40rem;
  font-size: 1rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;

}

#blog-context {
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  color: #FFFFFF;
}

.foot{
  display: flex;
  flex-direction: row;
  gap: 8rem;
  margin-left: 0.4rem;
}

.Editor {
  display: flex;
  flex-direction: row;
  font-weight: bold;
}

#img-editor {
  width: 2rem;
  height: 2rem;
  background: url("@/assets/blog/blog-editor.svg") no-repeat center center;
  background-size: cover;
}

#editor-id {
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
}

.time {
  display: flex;
  flex-direction: row;
  font-style: italic;
}

#img-date {
  width: 2rem;
  height: 2rem;
  background: url("@/assets/blog/blog-time.svg") no-repeat center center;
  background-size: cover;
}

#date-time {
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
}

.featureBar {
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
}

.favorite {
  width: 7rem;
  height: 3rem;
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  align-items: center;
  margin: 0.5rem 0.5rem 0.5rem 1rem;
}

.like {
  width: 7rem;
  height: 3rem;
  margin: 0.5rem;
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  align-items: center;
}

.shit {
  width: 7rem;
  height: 3rem;
  margin: 0.5rem;
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  align-items: center;
}

#img-favorite {
  background: url("@/assets/blog/mark.svg") no-repeat center center;
  background-size: cover;
  width: 2rem;
  height: 2rem;
  margin-left: 0.3rem;
}

#text-favorite {
  color: white;
}

#img-like {
  background: url("@/assets/blog/delicious.svg") no-repeat center center;
  background-size: cover;
  width: 2rem;
  height: 2rem;
  margin-left: 0.3rem;
}

#text-like {
  color: white;
}

#img-shit {
  background: url("@/assets/blog/holyshit.svg") no-repeat center center;
  background-size: cover;
  width: 2rem;
  height: 2rem;
  margin-left: 0.3rem;
}

#text-shit {
  color: white;
}



</style>