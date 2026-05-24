<script setup>

</script>

<template>
  <div class="item-blog">
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
      <div id="blog-show"></div>
    </div>
  </div>
</template>

<style scoped>
.blog-box {
  width: 36rem;
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
  width: 30rem;
}

#blog-show {
  width: 3rem;
  height: 3rem;
  background: url("@/assets/show-detile.svg") no-repeat center center;
  background-size: 100% 100%;
  margin-left: 2rem;
  margin-top: 1rem;
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
  margin-left: 1rem;
  font-weight: bolder;
}

.blog-editor {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  height: auto;
  width: 100%;
}


#blog-editor {
  margin-left: 2rem;
  font-weight: bold;
}

.blog-time {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  height: auto;
  width: 100%;
}

#blog-time {
  margin-left: 3rem;
  font-style: italic;
}
</style>