<script>

</script>

<template>
  <div class="buttonNavigator">
    <div class="tips">
      <p id="tip">更多</p>
    </div>
    <div class="mediumMess">
      <div class="github">
        <img id="github" src="@/assets/github.svg" alt="github">
        <a id = "XianYin69" href="https://github.com/xianyin69">Github:XianYin69</a>
      </div>
      <div class="email">
        <img id="Email" src="@/assets/email.svg" alt="email">
        <a id = "email" href="mailto:www324608yf@outlook.com">电子邮箱：www324608yf@outlook.com</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fontsapi.zeoseven.com/69/main/result.css");
.buttonNavigator{
  position: relative;
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #AAD0F1;
    width: 100%;
    padding-left: 0.5rem;
    font-weight: bold;
    .github {
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
    }
    #github {
      width: 2rem;
      height: 2rem;
    }
    .email {
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
    }
    #Email {
      width: 2rem;
      height: 2rem;
    }
    #XianYin69 {
      background: #E4F5FA;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    #email {
      background: #E4F5FA;
      background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  }

}
@media (max-width: 720px) {
  .buttonNavigator {
    height: 4rem;
    font-size: 0.7rem;
    .tips {
      #tip {
        font-size: 1rem;
      }
    }
  }
}
</style>