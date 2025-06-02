<script setup>
import { RouterView } from "vue-router";
import { watch, ref, onMounted } from "vue";
import blogs from "./blogs.js";
import "sober";
import axios from "axios";

const serverApiUrl = "https://xnors.pythonanywhere.com/get_visit_count";
const sendNewVisitToServer = () => {
  axios
    .get(serverApiUrl)
    .then((response) => {
      console.log(response.data);
      if (response.data != "ok") {
        console.log("error", response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
let searchText = ref("");

// 监听 searchText 的变化并打印其值
watch(searchText, (newValue) => {
  console.log(newValue);
  // 调用搜索函数
  searchBlogs(newValue);
});

const blogsFiltered = ref(blogs);

// 过滤博客列表
function searchBlogs(text) {
  blogsFiltered.value = blogs.filter(
    (blog) =>
      blog.name.toLowerCase().includes(text.toLowerCase()) ||
      blog.desc.toLowerCase().includes(text.toLowerCase())
  );
  console.log(blogsFiltered.value);
}

onMounted(() => {
  sendNewVisitToServer();
});
</script>

<template>
  <s-page theme="dark" style="min-height: 100%; width: 100%">
    <div class="appbar">
      <div style="display: flex; flex-direction: row; align-items: center">
        <router-link to="/xblogs">
          <s-icon-button>
            <s-icon name="home"></s-icon>
          </s-icon-button>
        </router-link>
        <div class="headline">XBlogs</div>
      </div>

      <div class="appber-left">
        <input placeholder="搜索博客" class="search" v-model="searchText" />
        <s-dialog class="dialog-box">
          <s-icon-button slot="trigger">
            <s-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="128"
                height="128"
                viewBox="0 0 64 64"
              >
                <path
                  d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 32 21 C 30.343 21 29 22.343 29 24 C 29 25.657 30.343 27 32 27 C 33.657 27 35 25.657 35 24 C 35 22.343 33.657 21 32 21 z M 32 30 C 30.895 30 30 30.896 30 32 L 30 42 C 30 43.104 30.895 44 32 44 C 33.105 44 34 43.104 34 42 L 34 32 C 34 30.896 33.105 30 32 30 z"
                ></path>
              </svg>
            </s-icon>
          </s-icon-button>
          <div slot="headline">Title</div>
          <div slot="text">
            问人生、头白京国，算来何事消得。不如罨画清溪上，蓑笠扁舟一只。人不识，且笑煮、鲈鱼趁著莼丝碧。无端酸鼻，向岐路消魂，征轮驿骑，断雁西风急。
            英雄辈，事业东西南北。临风因甚泣。酬知有愿频挥手，零雨凄其此日。休太息，须信道、诸公衮衮皆虚掷。年来踪迹。有多少雄心，几翻恶梦，泪点霜华织。
          </div>
          <s-button slot="action" type="text">取消</s-button>
          <s-button slot="action" type="text">确定</s-button>
        </s-dialog>
      </div>
    </div>
    <main>
      <RouterView :blogs="blogsFiltered" />
    </main>
  </s-page>
</template>

<style lang="scss" type="text/scss" scoped>
$background-color: #1c1c1d; // 修正拼写错误

.appbar {
  background-color: $background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw;
  height: 6vh;

  .headline {
    font-size: 110%;
    margin-top: 3px;
    font-weight: bold;
  }
  .appber-left {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    height: 100%;

    .search {
      background-color: #313133;
      box-shadow: none;
      border: none;
      padding: calc(0.5vw + 0.6vh);
      margin-right: 1vw;
      color: white;
      border-radius: 3px;
      height: 60%;
      min-width: 20%;
      width: 30%;
      outline: none;
      transition: all 0.3s ease;
      &:hover {
        background-color: #414144;
      }
      &:focus {
        width: 80%;
        background-color: #38383b;
      }
    }
    .dialog-box {
      div[slot="text"] {
        // display: none;
        margin: 1vh 1.6vw;
      }

      div[slot="headline"] {
        margin: 3vh 1.6vw;
        margin-bottom: 0.2vh;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .search {
    width: 50%;
    & :focus {
      width: 80%;
    }
  }
}
</style>
