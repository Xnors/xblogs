<script setup>
import { RouterView } from "vue-router";
import { watch, ref } from "vue";
import blogs from "./blogs.js";
import "sober";

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

      <input placeholder="搜索博客" class="search" v-model="searchText" />
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
}

.search {
  background-color: #313133;
  box-shadow: none;
  border: none;
  padding: calc(0.5vw + 0.6vh);
  margin-right: 2vw;
  color: white;
  border-radius: 3px;
  height: 60%;
  min-width: 20%;
  width: 20%;
  outline: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #414144;
  }
  &:focus {
    width: 50%;
    background-color: #38383b;
  }
}

@media screen and (max-width: 768px) {
  .search {
    width: 30%;
    min-width: 30%;
  }
}
</style>
