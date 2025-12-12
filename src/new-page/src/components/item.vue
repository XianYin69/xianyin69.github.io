<script setup>
import stateDes from "@/components/stateDes.vue"
</script>

<template>
  <div class="item">
    <div id="item">
      <a id="itemID">item</a>
    </div>
    <div id="state">
      <p id="stateID">state</p>
    </div>
  </div>
  <stateDes id="stateDes"/>
</template>

<style scoped>
.item {
  position: relative;
  left: 3rem;
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 40rem;
  font-size: 2rem;
  font-weight: bold;
}
#state {
  background: linear-gradient(to right,#4280D9 10%, #E4F5FA 40%);
  width: 40%;
}
#item {
  background: #4280D9;
  width: 60%;
}
#itemID {
  background: #AAD0F1;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 10%;
  left: 5%;
}
#stateID {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: -50%;
  right: -45%;
  width: 4rem;
}
#stateDes {
  display: none;
}
#state :hover {
  #stateDes {
    display: block;
  }
}
</style>