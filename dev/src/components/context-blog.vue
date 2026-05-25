<script setup>

const emit = defineEmits(['switch'])

const toItem = () => {
  emit('switch', 'item')
}

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
}

#exit {
  background: url("@/assets/close.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 3rem;
  height: 3rem;
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
}

.context {
  width: 100%;
  height: 100%;
  font-size: 1rem;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: cover;

  overflow: hidden;
}

#blog-context {
  width: 100%;
  height: 100%;
  margin-left: 1rem;
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
}

</style>