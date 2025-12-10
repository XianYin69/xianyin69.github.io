<script>

</script>

<template>
  <div class="topNavigator">
    <div id="Info">首页</div>
    <div id="Project">项目</div>
    <div id="Link">链接</div>
  </div>
</template>

<style>
.topNavigator {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  font-size: 2rem;
  background: #4286D9;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  #Info {
    transition: background 0.2s;
  }
  #Project {
    transition: background 0.2s;
  }
  #Link {
    transition: background 0.2s;
  }
}

#Info:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Project:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#Link:hover {
  background: #0016C4;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 720px) {
  .topNavigator {
    gap: 5rem;
    font-size: 2rem;
  }
}
</style>