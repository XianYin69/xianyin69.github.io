<script setup>
import { ref, onMounted } from 'vue';
import { login, logout, fetchCurrentUser } from '@/user.js'; // 路径根据实际情况调整

const user = ref(null);

onMounted(async () => {
  // 页面挂载时自动检查用户有没有登录
  user.value = await fetchCurrentUser();
});

import {useLang} from "@/lang.js";
const {t} = useLang();
</script>

<template>
  <div class="user-panel">
    <div class="Login" v-if="user">
      <img :src="user.avatar" alt="avatar" class="avatar" />
      <div class="login-text">
        <span>{{t('Panel.WelcomeBack')}}，{{ user.name }}</span>
        <div @click="logout">
          <div class="logout">
            <div id = "logout">
              {{t(Panel.Logout)}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="notLogin" @click="login">
        <div id="img-github"></div>
        <div id="github">{{t('Panel.Sign')}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-panel {
  gap: 1rem;
  height: auto;
  width: auto;
  margin-left: 4rem;
  margin-top: 1rem;
  overflow: hidden;
}

.notLogin {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.Login {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.login-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

span {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(31 84 129);
}

.logout {
  background: url("@/assets/background-buttom.svg") no-repeat center center;
  background-size: 100% 100%;
  width: 2rem;
  height: 1rem;
}

#logout {
  color: #1d5380;
  font-size: 1rem;
}

img {
  width:4rem;
  height:4rem;
  align-self: center;
}

#img-github {
  width: 4rem;
  height: 4rem;
  background: url("@/assets/github.svg") no-repeat center center;
  background-size: 100% 100%;
  align-items: center;
}

#github {
  font-weight: bold;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #1d5380;
}
</style>