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
        <p id="releasedWord">已发布</p>
      </div>
      <div class="discard">
        <div id="discardColor"></div>
        <p id="discardWord">已废弃</p>
      </div>
      <div class="testing">
        <div id="testingColor"></div>
        <p id="testingWord">测试中</p>
      </div>
    </div>
    <div class="line2">
      <div class="available">
        <div id="availableColor"></div>
        <p id="availableWord">可用</p>
      </div>
      <div class="unavailable">
        <div id="unavailableColor"></div>
        <p id="unavailableWord">不可用</p>
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
  background: #9FE4F2;
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
.line2 {
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
    background: #F9C744;
    width: 2rem;
    height: 2rem;
  }
  #inProWord {
    background: #FFFFFF;
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
    background: #90BE6D;
    width: 2rem;
    height: 2rem;
  }
  #releasedWord {
    background: #FFFFFF;
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
    background: #F77038;
    width: 2rem;
    height: 2rem;
  }
  #discardWord {
    background: #FFFFFF;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
.testing {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  #testingColor {
    background: #5086B0;
    width: 2rem;
    height: 2rem;
  }
  #testingWord {
    background: #FFFFFF;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
.available {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  #availableColor {
    background: #90BE6D;
    width: 2rem;
    height: 2rem;
  }
  #availableWord {
    background: #FFFFFF;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
.unavailable {
  display: flex;
  flex-direction: row;
  padding-left: 0.9rem;
  gap: 0.2rem;
  #unavailableColor {
    background: #F77038;
    width: 2rem;
    height: 2rem;
  }
  #unavailableWord {
    background: #FFFFFF;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: -0.6rem;
  }
}
</style>