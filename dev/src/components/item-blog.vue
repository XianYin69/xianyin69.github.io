<script setup>
const emit = defineEmits(['switch'])

const toContext = () => {
  emit('switch', 'context')
}
</script>

<template>
<div class="blog-box">
  <div class="blog-main">
    <div class="blog-title">
      <div id="img-blog-title"/>
      <span id="blog-title">a</span>
    </div>
    <div class="blog-editor">
      <div id="img-blog-editor"/>
      <span id="blog-editor">ab</span>
    </div>
    <div class="blog-time">
      <div id="img-blog-time"/>
      <span id="blog-time">b</span>
    </div>
  </div>
  <div id="blog-show" @click="toContext"></div>
</div>
</template>

<style scoped>
.blog-box {
  width: 36rem;
  height: 7rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 2rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  gap: 0.2rem;

  overflow: hidden;
  position: relative;
}

.blog-box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0) 40%,
      rgb(255 255 255 / 0.13) 50%,
      rgb(208 252 255 / 0.7) 55%,
      rgba(255, 255, 255, 0) 70%
  ) 200% 0;
  background-size: 200% 100%;

  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 4s ease;
}

.blog-box:hover::after {
  opacity: 1;
  animation: wave-flow 5s linear infinite;
}

@keyframes wave-flow {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.blog-main {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 30rem;

  z-index: 2;
  position: relative;
}

#blog-show {
  width: 3rem;
  height: 3rem;
  background: url("@/assets/show-detile.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 2rem;
  margin-top: 1rem;

  z-index: 2;
  position: relative;
}

.blog-title {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  height: auto;
  width: 100%;
}

#img-blog-title {
  background: url("@/assets/blog/blog-title.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
}

#blog-title {
  font-weight: bolder;
}

.blog-editor {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  height: auto;
  width: 100%;
}

#img-blog-editor {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  background: url("@/assets/blog/blog-editor.svg") no-repeat center center;
  background-size: 100% 100%;
}

#blog-editor {
  font-weight: normal;
}

.blog-time {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  height: auto;
  width: 100%;
  margin-bottom: 0.2rem;
}

#img-blog-time {
  width: 2rem;
  height: 2rem;
  background: url("@/assets/blog/blog-time.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 1rem;
}

#blog-time {
  font-style: italic;
}
</style>