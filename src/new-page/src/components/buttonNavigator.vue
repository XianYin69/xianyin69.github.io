<script>
</script>

<template>
  <div class="buttonNavigator">
    <div class="tips">
      <p id="tip">更多</p>
    </div>
    <div class="mediumMess">
      <p id = "XianYin69">Github:XianYin69</p>
      <p id = "www324608yf@outlook.com">电子邮箱：www324608yf@outlook.com</p>
    </div>
    <div class="rightTips">
      <p id = "language">语言</p>
    </div>
  </div>
</template>

<style>
@import url("https://fontsapi.zeoseven.com/69/main/result.css");
.buttonNavigator{
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  font-size: 1.3rem;
  background: #4286D9;
  width: 100%;
  .tips {
    #tip {
      font-size: 3rem;
      font-weight: bold;
      background: #AAD0F1;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      border-left: 0.2rem;
    }
  }

  .mediumMess {
    background: #AAD0F1;
    width: 100%;
  }

  .rightTips {
    background: #AAD0F1;
    width: 100%;
  }
}
@media (max-width: 720px) {
  .buttonNavigator {
    height: 2rem;
    font-size: 0.7rem;
    .tips {
      #tip {
        font-size: 1.5rem;
      }
    }
  }
}
</style>