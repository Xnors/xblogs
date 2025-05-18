<script setup>
import "sober";
import Blog from "../components/Blog.vue";
import blogs from "../blogs";
</script>

<template>
  <s-page theme="dark" style="height: 100%; width: 100%">
    <s-appbar>
      <s-icon-button slot="navigation">
        <s-icon name="menu"></s-icon>
      </s-icon-button>
      <div slot="headline" style="margin-right: max(2vw, 60px)">Blogs</div>
      <s-search slot="search" placeholder="搜索博客名..."></s-search>
      <s-icon-button slot="action">
        <s-icon name="search"></s-icon>
      </s-icon-button>
    </s-appbar>

    <div class="content">
      <!-- <Blog
        class="blog"
        name="Vue 3.0 发布了"
        desc="Vue 3.0 发布了，带来了许多新特性，比如 Composition API、Teleport、Fragments 等等。"
        date="2021-06-22"
        routeurl="/blog/bfinter"
      ></Blog> -->
      <Blog
        v-for="blog in blogs"
        :key="blog.name"
        :class="blog.name"
        :name="blog.name"
        :desc="blog.desc"
        :date="blog.date"
        :routeurl="blog.routeurl"
      ></Blog>
    </div>
  </s-page>
</template>

<style lang="scss" type="text/scss">
$backgroud-color: #1c1c1d;

.content {
  background-color: $backgroud-color;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  height: 100%;
}
</style>
