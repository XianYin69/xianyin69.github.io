<script setup>
import itemBlog from "@/components/item-blog.vue";
import contextBlog from "@/components/context-blog.vue";
import {showComments} from "@/blog.js";
import {ref} from 'vue';

const tabs = {
  item: itemBlog,
  context: contextBlog
}

const currentTab = ref('item')

const switchComponent = (target) =>
{
  if (tabs[target]) {
    currentTab.value = target;
    if(target === "context") {
      showComments.emit('tab-changed', target);
    } else {
      showComments.emit('tab-changed', 'close');
    }
  }
}

const isShowMenu = ref(true);

</script>

<template>
  <div class="page-blog">
    <div class="blog">
      <div class="menuTop" v-if="isShowMenu">
        <div class="menuBox">
          <div class="menuWrite">
            <div id="iconMenuWrite"></div>
            <div id="textMenuWrite">
              写
            </div>
          </div>
          <div class="menuFavorite">
            <div id="iconMenuFavorite"></div>
            <div id="textMenuFavorite">
              收藏夹
            </div>
          </div>
          <div class="menuInfoBox">
            <div id="iconMenuInfo"></div>
            <div id="textMenuInfo">
              消息盒
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <component :is="tabs[currentTab]" @switch="switchComponent"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-blog {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0.1rem;

  .content {
    width: 95%;
    height: 30rem;
    overflow-x: hidden;
    overflow-y: auto;
    margin-left: 1rem;
  }

  .menuTop {
    width: 90%;
    height: 4.6rem;
    background: url("@/assets/backgroud-card.svg") center center no-repeat;
    background-size: 100% 100%;
    margin-top: 1rem;
    align-self: center;
    align-items: center;
  }

  .menuBox {
    width: 100%;
    height: 4rem;
    margin: 0.5rem;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .menuWrite {
    background: url("@/assets/background-buttom.svg") center center no-repeat;
    background-size: 100% 100%;
    width: 8rem;
    height: 3rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.1rem;
  }

  #iconMenuWrite {
    width: 3rem;
    height: 3rem;
    background: url("@/assets/blog/write.svg") center center no-repeat;
    background-size: 100% 100%;
    margin-left: 1rem;
  }

  #textMenuWrite {
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    color: #FFFFFF;
  }

  .menuFavorite {
    background: url("@/assets/background-buttom.svg") center center no-repeat;
    background-size: 100% 100%;
    width: 8rem;
    height: 3rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.1rem;
  }

  #iconMenuFavorite {
    background: url("@/assets/blog/like.svg") center center no-repeat;
    background-size: 100% 100%;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }

  #textMenuFavorite {
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    color: #FFFFFF;
  }

  .menuInfoBox {
    background: url("@/assets/background-buttom.svg") center center no-repeat;
    background-size: 100% 100%;
    width: 8rem;
    height: 3rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.1rem;
  }

  #iconMenuInfo {
    background: url("@/assets/blog/infoBox.svg") center center no-repeat;
    background-size: 100% 100%;
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
  }

  #textMenuInfo {
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    color: #FFFFFF;
  }

  .blog {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    background: url("@/assets/backgroud-card.svg") no-repeat center center;
    background-size: 100% 100%;
    width: 40rem;
    height: 37rem;
    margin-left: 7rem;
  }
}

.menuWrite {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
}

.menuFavorite {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
}

.menuInfoBox {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
}
</style>