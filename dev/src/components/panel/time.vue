<template>
  <div class="ps3-clock-wrapper">
    <div class="ps3-statusbar">
      <span class="ps3-time-text">
        <span id="data">
          {{ dateStr }}
        </span>
        <span id="time">
          {{ timeStr }}
        </span>
      </span>
      <div class="ps3-radar-clock">
        <svg viewBox="0 0 100 100" class="radar-svg">
          <circle cx="50" cy="50" :r="waveRadius" class="radar-wave" />

          <circle cx="50" cy="50" r="45" class="outer-ring" />

          <line x1="50" y1="50" x2="50" y2="14" class="clock-hand minute-hand" :style="{ transform: `rotate(${minuteAngle}deg)` }" />
          <line x1="50" y1="50" x2="50" y2="28" class="clock-hand hour-hand" :style="{ transform: `rotate(${hourAngle}deg)` }" />

          <circle cx="50" cy="50" r="4" class="center-dot" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 时间文本
const timeStr = ref('')
const dateStr = ref('')

// 动画状态
const waveRadius = ref(5)
const hourAngle = ref(0)
const minuteAngle = ref(0)

let timer = null
let animationId = null

// 1. 国际化时间与指针角度计算
const updateTime = () => {
  const now = new Date()
  const locale = navigator.language || 'zh-CN'

  // 格式化文本
  dateStr.value = new Intl.DateTimeFormat(locale, { month: 'numeric', day: 'numeric' }).format(now)
  timeStr.value = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit', hour12: false }).format(now)

  // 计算时针、分针角度
  const minutes = now.getMinutes()
  const hours = now.getHours()

  minuteAngle.value = minutes * 6
  hourAngle.value = (hours % 12) * 30 + minutes * 0.5
}

// 2. 雷达扫描与动态圆环扩散动画 (60fps)
const renderAnimation = () => {
  // 圆环由内向外扩散逻辑：半径从 5 扩大到 45
  waveRadius.value += 0.6
  if (waveRadius.value > 45) {
    waveRadius.value = 5 // 释放完后回到中心重新扩散
  }

  animationId = requestAnimationFrame(renderAnimation)
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
  renderAnimation()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<style scoped>
/* 外部背景环境测试（嵌入你的网站时可删掉 background） */
.ps3-clock-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

/* 状态栏基础布局 */
.ps3-statusbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
}

/* 经典 PS3 系统字体系数 */
.ps3-time-text {
  color: rgba(255, 255, 255, 0.95);
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: normal;
  text-shadow: 0 0 6px rgb(156 225 219 / 0.8);
  display: flex;
  gap: 0.5rem;
}

#data {
  font-weight: normal;
  font-size: 1.3rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}

#time {
  font-weight: bolder;
}

/* 右侧微型雷达时钟容器 */
.ps3-radar-clock {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radar-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* 1. 由内向外扫出的动态圆环 */
.radar-wave {
  fill: none;
  stroke: rgba(255, 255, 255, 0.4);
  stroke-width: 2;
  /* 运用 CSS 表达式：随着半径变大，透明度渐隐 */
  opacity: calc(1 - v-bind(waveRadius) / 45);
}

/* 2. 外圈固定轮廓 */
.outer-ring {
  fill: none;
  stroke: rgba(255, 255, 255, 0.7);
  stroke-width: 4;
}

/* 4. 时针与分针样式 */
.clock-hand {
  stroke: rgba(255, 255, 255, 0.9);
  stroke-linecap: round;
  transform-origin: 50px 50px;
}
.minute-hand {
  stroke-width: 4;
}
.hour-hand {
  stroke-width: 5.5;
}

/* 5. 中心点 */
.center-dot {
  fill: #ffffff;
}
</style>