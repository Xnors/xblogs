<script setup>
import { marked } from "marked";
import { onMounted, ref, nextTick } from "vue";
import { initializeVisitCount } from "../scripts/get_visit_count.js";
import hljs from "highlight.js/lib/core";
import { useRoute } from "vue-router";
import blogs from "../blogs.js";


const route = useRoute();
const id = route.params.id;
const visitCount = ref("(正在获取...)");
const markdowntext = ref("");

onMounted(async () => {
  try {
    visitCount.value = await initializeVisitCount();
  } catch (error) {
    console.error("Failed to get visit count:", error);
    visitCount.value = "(获取失败)";
  }
  // alert(route.params.id)
});

const getItemFromID=(id)=>{
  console.log(id)
  console.log(blogs[id])
return blogs[id]
}

const loadMd = async () => {
  try {
    let iname=getItemFromID(id)["filename"]
    console.log("LOADING MD FILE:",iname)
    const response = await fetch(`/xblogs/mds/${iname}`);
    const markdownText = await response.text();
    
    markdowntext.value = markdownText;
    // console.log(markdownText,response);
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
    if (markdowntext.value.includes("$")) {
      console.log("MathJax is not loaded yet, loading it now...");
      initMathJax();
    }
    else{
      console.log("MathJax is not needed for this blog.")
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
