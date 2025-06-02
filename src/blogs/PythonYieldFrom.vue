<script setup>
import { marked } from "marked";
import hljs from "highlight.js";
import { onMounted, nextTick, ref } from "vue";

const markdowntext = ref("");

const loadMd = async () => {
  try {
    const response = await fetch("/xblogs/mds/PythonYieldFrom.md");
    const markdownText = await response.text();
    markdowntext.value = markdownText;
  } catch (error) {
    console.error("加载md文件失败了:", error);
    markdowntext.value = "加载失败了!!!";
  }
};

onMounted(async () => {
  await loadMd();
  // 确保 DOM 更新完成后调用 highlightAll
  nextTick(() => {
    hljs.highlightAll();
  });
});
</script>

<template>
  <div class="content">
    <div class="boxinside">
      <div v-html="marked(markdowntext)"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./blogStyles.scss");
</style>
