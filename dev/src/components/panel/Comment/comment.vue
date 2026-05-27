<script setup>
import {ref} from "vue";
const showMenu = ref(true);
</script>

<template>
<div class="comment">
  <div class="userComment">
    <div class="userInfo">
      <div id="img-user">IMG</div>
      <div id="userInfo">A</div>
    </div>
    <div id="comment-context">NM</div>
  </div>
  <div class="menu" v-if="ref(showMenu)">
    <div id="respond">respond</div>
  </div>
</div>
</template>

<style scoped>
.comment {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.8rem;
}

.userComment {
  width: 26rem;
  height: auto;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.userInfo {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 1rem;
}

#userInfo {
  color: #FFFFFF;
  font-size: 0.5rem;
  font-weight: lighter;
}

#img-user {
  width: 4rem;
  height: 4rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;
  align-self: center;
  margin-top: 0.3rem;
}

#comment-context {
  background: url("@/assets/blog/commentBar.svg") no-repeat center center;
  width: 19rem;
  height: auto;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #e1ecf8;
}

.menu {
  width: 20rem;
  height: 3rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 3.7rem;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
}

#respond {
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 5rem;
  height: 2rem;
  margin: 0.5rem;
  align-content: center;
  text-align: center;
}
</style>