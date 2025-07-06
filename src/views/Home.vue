<script setup>
import "sober";
import Blog from "../components/Blog.vue";
import { defineProps } from "vue";
import { useRoute } from "vue-router"
import { onMounted } from "vue";

const route = useRoute();


// import blogs from "../blogs";
// let blogs = reactive([]);
defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
console.log(route);
onMounted(
  ()=>{
    console.log("mounted");
    console.log(route)
  }
)
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
      :routeurl="blog.routeUrl"
      v-show="blog.show"
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
