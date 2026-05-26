<script setup>
import { ref, onMounted } from 'vue';
import { login, logout, fetchCurrentUser } from '@/user.js'; // 路径根据实际情况调整

const user = ref(null);

onMounted(async () => {
  // 页面挂载时自动检查用户有没有登录
  user.value = await fetchCurrentUser();
});
</script>

<template>
  <div class="user-panel">
    <div v-if="user">
      <img :src="user.avatar" alt="avatar" class="avatar" />
      <span>欢迎回来，{{ user.name }}</span>
      <button @click="logout">退出登录</button>
    </div>

    <div v-else>
      <p>登录后即可发表评论和点赞</p>
      <button @click="login">使用 GitHub 登录</button>
    </div>
  </div>
</template>