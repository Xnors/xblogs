<script setup>
import { marked } from "marked";
import axios from "axios";
import { onMounted, ref } from "vue";

const visitCount = ref("(正在获取...)");
const serverApiUrl = "https://xnors.pythonanywhere.com/get_visit_count";

const getVisitCount = async () => {
  console.log("Getting visit count from server...");
  try {
    const response = await axios.get(serverApiUrl);
    const count = response.data;
    const timestamp = Date.now();

    // 保存到 localStorage
    localStorage.setItem("visitCount", count);
    localStorage.setItem("timestamp", timestamp);

    visitCount.value = count;
  } catch (error) {
    console.error(error);
  }
};

const loadFromCache = () => {
  const cachedCount = localStorage.getItem("visitCount");
  const cachedTimestamp = localStorage.getItem("timestamp");

  if (cachedCount && cachedTimestamp) {
    const currentTime = Date.now();
    const timeDiff = currentTime - Number(cachedTimestamp);

    // 如果时间差小于一分钟（60000毫秒），使用缓存数据
    if (timeDiff < 60000) {
      visitCount.value = cachedCount;
      console.log("Using cached visit count");
      return true;
    }
  }

  return false;
};

onMounted(() => {
  // 尝试从缓存加载
  if (!loadFromCache()) {
    // 如果缓存不可用，从服务器获取
    getVisitCount();
  }
});

const markdowntext = `
# Welcome to XBlogs

**Xblogs** 是 [**XnorsCode/异或工作室**](https://github.com/xnors) 开发的一个的博客网站, 上面有 Xnors 团队成员的一些日常开发心得, 也会分享一些技术干货.

> 目前已被访问 __{{ visitCount.value }}__ 次
## 使用

本博客网站以简洁为设计理念, 界面简洁, 易于操作

进入首页, 顶部是导航栏, 下方的卡片是博客文章列表, 点击卡片上方的淡蓝色标题可以进入文章详情页.

进入文章详情页后, 可以点击左上角 _XBlogs_ 字样左侧的房子图标, 切换到首页.

---

## 开发

### 使用的技术

- [Vue.js](https://cn.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Sober.js](https://soberjs.com/)
- [Marked.js](https://marked.js.org/)
- [Highlight.js](https://highlightjs.org/)
- [Scss](https://sass-lang.com/)
- [Vue-Router](https://router.vuejs.org/)


`;

const renderMarkdown = () => {
  return marked(
    markdowntext.replace("{{ visitCount.value }}", visitCount.value)
  );
};
</script>

<template>
  <div class="content">
    <div class="boxinside">
      <div v-html="renderMarkdown(markdowntext)"></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100vh;
  padding: 0.6vw;

  .boxinside {
    padding: calc(1vw + 1vh);
    width: 60%;
    background-color: rgba(245, 245, 245, 0.068);
    border-radius: 6px;
  }
}

@media screen and (max-width: 768px) {
  * {
    font-size: 96%;
  }
  .content {
    .boxinside {
      background-color: #ffffff00;
      width: 100%;
      padding: calc(1vw + 1vh) calc(1.6vw + 1.6vh);
    }
  }
}
</style>
