<script setup>
import { marked } from "marked";
import { onMounted, ref, nextTick } from "vue";
import { initializeVisitCount } from "../scripts/get_visit_count.js";
import hljs from "highlight.js/lib/core";

const visitCount = ref("(正在获取...)");

onMounted(async () => {
  try {
    visitCount.value = await initializeVisitCount();
  } catch (error) {
    console.error("Failed to get visit count:", error);
    visitCount.value = "(获取失败)";
  }
});

const markdowntext = ref("");

const loadMd = async () => {
  try {
    const response = await fetch("/xblogs/mds/Welcome.md");
    const markdownText = await response.text();
    markdowntext.value = markdownText;
  } catch (error) {
    console.error("加载md文件失败了:", error);
    markdowntext.value = "加载失败了!!!";
  }
};

function renderMarkdown() {
  return marked(
    markdowntext.value.replace("{{ visitCount.value }}", visitCount.value)
  );
}

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
      <div v-html="renderMarkdown()"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./blogStyles.scss");
</style>
