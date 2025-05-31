<script setup>
import "sober";
import Blog from "../components/Blog.vue";
import blogs from "../blogs";
</script>

<template>
    <div class="content">
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
