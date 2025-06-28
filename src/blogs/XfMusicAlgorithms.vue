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
  
  nextTick(() => {
    hljs.highlightAll();
    
    // 配置并初始化 MathJax 并设置公式背景色
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      },
      startup: {
        ready: () => {
          // 公式渲染完成后，设置背景色
          MathJax.startup.defaultReady();
          
          // 获取所有公式元素并设置背景色
          document.addEventListener('DOMContentLoaded', () => {
            const mathElements = document.querySelectorAll('.MJXc-TeX');
            mathElements.forEach(element => {
              // 创建一个 div 包裹公式，并设置背景色
              const wrapper = document.createElement('div');
              wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'; // 浅色背景
              wrapper.style.padding = '8px 12px';
              wrapper.style.borderRadius = '4px';
              wrapper.style.margin = '8px 0';
              wrapper.style.display = 'inline-block'; // 适应内容宽度
              
              // 将公式元素移到新 div 中
              element.parentNode.insertBefore(wrapper, element);
              wrapper.appendChild(element);
            });
          });
        }
      }
    };
    
    // 创建并添加 MathJax 脚本
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    
    // 确保 DOM 完全加载后再渲染公式
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