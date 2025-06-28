<script setup>
import { marked } from "marked";
import hljs from "highlight.js/lib/core";

import { onMounted, nextTick, ref } from "vue";

const markdowntext = ref("");

const loadMd = async () => {
  try {
    const response = await fetch("/xblogs/mds/XfMusicAlgorithms.md");
    const markdownText = await response.text();
    markdowntext.value = markdownText;
  } catch (error) {
    console.error("加载md文件失败了:", error);
    markdowntext.value = "加载失败了!!!";
  }
};

onMounted(async () => {
  await loadMd();
  
  // 确保 DOM 更新完成后调用 highlightAll 和 MathJax
  nextTick(() => {
    hljs.highlightAll();
    
    // 配置并初始化 MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    };
    
    // 创建并添加 MathJax 脚本
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    
    // 等待 MathJax 加载完成后渲染公式
    script.onload = () => {
      MathJax.typeset();
    };
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