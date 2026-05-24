<script setup>

</script>

<template>
  <div class="item-blog">
    <div class="blog-box">
      <div class="blog-main">
        <span id="blog-title">a</span>
        <span id="blog-editor">ab</span>
        <span id="blog-time">b</span>
      </div>
      <div id="blog-show"></div>
    </div>
  </div>
</template>

<style scoped>
.blog-box {
  width: 30rem;
  height: auto;
  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 2rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  gap: 0.2rem;
}

.blog-main {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

#blog-show {
  width: 3rem;
  height: 3rem;
  background: url("@/assets/show-detile.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 22rem;
  margin-top: 1rem;
}

#blog-title {
  margin-left: 1rem;
  font-weight: bolder;
}

#blog-editor {
  margin-left: 2rem;
  font-weight: bold;
}

#blog-time {
  margin-left: 3rem;
  font-style: italic;
}
</style>