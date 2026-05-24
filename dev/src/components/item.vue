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