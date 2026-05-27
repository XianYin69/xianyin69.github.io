<script setup>
import {ref} from 'vue'
import Comment from "@/components/panel/Comment/comment.vue";
const isSend = ref(false);
</script>

<template>
  <div class="comment">
    <div class="comments">
      <comment/>
    </div>
    <div class="send-comment">
      <div id="send-comment">

      </div>
      <div id="img-send-comment" @click="ref(isSend)"></div>
    </div>
  </div>
</template>

<style>
.comment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
}

.comments {
  width: 100%;
  height: 90%;
}

.send-comment {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
}

#send-comment {
  background: url("@/assets/blog/commentBar.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 24rem;
  height: 3rem;
  overflow: hidden;
}

#send-comment::after {
  content: "";
  position: absolute;
  width: 24rem;
  height: 3rem;

  background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0) 40%,
      rgb(255 255 255 / 0.32) 50%,
      rgb(197 247 255 / 0.68) 55%,
      rgb(244 244 244 / 0) 70%
  ) 200% 0;
  background-size: 200% 100%;

  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 6s ease;
}

#send-comment:hover::after {
  opacity: 1;
  animation: wave-flow 5s infinite linear;
}

@keyframes wave-flow {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

#img-send-comment {
  background: url("@/assets/blog/upload.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 3rem;
  height: 3rem;
}
</style>