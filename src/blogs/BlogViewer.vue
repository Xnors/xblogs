<script setup>
import { marked } from "marked";
import { onMounted, ref, nextTick } from "vue";
import { initializeVisitCount } from "../scripts/get_visit_count.js";
import hljs from "highlight.js/lib/core";
import { useRoute } from "vue-router";

const route = useRoute();
const name = route.params.name;
const visitCount = ref("(正在获取...)");
const markdowntext = ref("");

onMounted(async () => {
  try {
    visitCount.value = await initializeVisitCount();
  } catch (error) {
    console.error("Failed to get visit count:", error);
    visitCount.value = "(获取失败)";
  }
  // alert(route.params.name)
});

const loadMd = async () => {
  try {
    const response = await fetch(`/xblogs/mds/${name}.md`);
    const markdownText = await response.text();
    
    markdowntext.value = markdownText;
    console.log(markdownText,response);
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
  console.log("mounted");
  
  await loadMd();
  nextTick(() => {
    hljs.highlightAll();
    if (name === 'xfmusicalgorithms') {
      initMathJax();
    }
  });
});

function initMathJax() {
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    startup: {
      ready: () => {
        MathJax.startup.defaultReady();
        document.addEventListener('DOMContentLoaded', () => {
          const mathElements = document.querySelectorAll('.MJXc-TeX');
          mathElements.forEach(element => {
            const wrapper = document.createElement('div');
            wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            wrapper.style.padding = '8px 12px';
            wrapper.style.borderRadius = '4px';
            wrapper.style.margin = '8px 0';
            wrapper.style.display = 'inline-block';
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
          });
        });
      }
    }
  };
  
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
  
  script.onload = () => {
    MathJax.typeset();
  };
}
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
