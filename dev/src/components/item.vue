<script setup>
//状态说明
import InfoDes from "@/components/InfoDes.vue"
import {ref} from "vue";
const isShow = ref(false);

//状态
const props = defineProps(['itemData'])
</script>

<template>
  <div class="item" >
    <a id="itemID" :href="props.itemData.url">{{ itemData.id }}</a>
    <div id="show" :class="{ 'is-open': isShow}" @click="isShow = !isShow"></div>
  </div>
  <InfoDes v-if="isShow" :itemData="itemData"/>
</template>

<style scoped>
.item {
  position: relative;
  left: 7rem;
  height: 3rem;
  width: 40rem;
  font-size: 2rem;
  font-weight: bold;
  transition: width 0.2s, height 0.2s, font-weight 0.2s;
  display: flex;
  flex-direction: row;

  background: url("@/assets/backgroud-card.svg") no-repeat center center;
  background-size: 100% 100%;

  overflow: hidden;
}

.item::after {
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

.item:hover::after {
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

#itemID, #show {
  position: relative;
  z-index: 2;
}

#itemID {
  font-size: 1.75rem !important;
  color: #ffffff !important;
  transform: translateY(-2px) scale(1.08);
  text-shadow: 0 0 15px rgb(8 205 201), 0 0 2px rgb(149 149 149);
  position: relative;
  top: 2%;
  left: 5%;
  text-decoration-line: none;
}

#show {
  width: 2rem;
  height: 2rem;
  background: url("@/assets/notShow.svg") no-repeat center center;
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
}

#show.is-open {
  background: url("@/assets/isShow.svg") no-repeat center center;
  background-size: 100% 100%;
}

</style>