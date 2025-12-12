<script setup>

</script>

<template>
  <div class="stateDes">
    <div class="line1">
      <div class="inProcess">
        <div id="inProColor"></div>
        <p id="inProWord">开发中</p>
      </div>
      <div class="released">
        <div id="releasedColor"></div>
        <p id="releasedWord">开发中</p>
      </div>
      <div class="discard">
        <div id="discardColor"></div>
        <p id="discardWord">已废弃</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stateDes {
  width: 25rem;
  height: auto;
  position: relative;
  left: 20rem;
  top: 0.2rem;
  background: #E4F5FA;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.line1 {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
  left: 0.5rem;
  top: 0.5rem;
}
.inProcess {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  #inProColor {
    background: yellow;
    width: 2rem;
    height: 2rem;
  }
  #inProWord {
    background: #4280D9;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
.released {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  #releasedColor {
    background: green;
    width: 2rem;
    height: 2rem;
  }
  #releasedWord {
    background: #4280D9;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
.discard {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  #discardColor {
    background: red;
    width: 2rem;
    height: 2rem;
  }
  #discardWord {
    background: #4280D9;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
</style>