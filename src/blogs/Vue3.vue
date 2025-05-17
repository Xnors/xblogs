<script setup>
import { marked } from "marked";
const markdowntext = `
# Vue3.0
## 什么是Vue3.0？
Vue3.0是什么？
- Vue3.0是Vue的最新版本，它是渐进式的JavaScript框架，它的目标是通过提供更好的性能、更小的体积和更好的开发体验来实现更好的用户体验。
- Vue3.0的主要变化：
  - 新的渲染机制：Vue3.0使用新的渲染机制，它将模板编译成渲染函数，并将渲染函数与数据绑定在一起，从而实现更高的性能。
  - 新的Composition API：Vue3.0引入了新的Composition API，它是一组用于构建Vue应用的函数式API。
  - 新的Teleport功能：Vue3.0引入了新的Teleport功能，它可以将组件的内容移动到另一个位置，而不改变组件的结构。
  - 新的Suspense功能：Vue3.0引入了新的Suspense功能，它可以实现异步组件的懒加载。
  - 新的Fragments功能：Vue3.0引入了新的Fragments功能，它可以将多个元素组合成一个片段，并将其渲染到同一个位置。
  - 新的Teleport功能：Vue3.0引入了新的Teleport功能，它可以将组件的内容移动到另一个位置，而不改变组件的结构。
  - 新的自定义事件系统：Vue3.0引入了新的自定义事件系统，它可以让开发者更容易地管理事件。
  - 新的生命周期钩子：Vue3.0引入了新的生命周期钩子，它可以让开发者更容易地管理组件的生命周期。
  - 新的API：Vue3.0引入了新的API，如provide/inject、watchEffect、toRefs、isReactive、isReadonly、customRef等。
- Vue3.0的主要特性：
  - 性能提升：Vue3.0使用新的渲染机制，它将模板编译成渲染函数，并将渲染函数与数据绑定在一起，从而实现更高的性能。
  - 代码体积减少：Vue3.0的体积比Vue2.0小很多，这主要是因为Vue3.0使用新的渲染机制，它将模板编译成渲染函数，并将渲染函数与数据绑定在一起，从而实现更高的性能。
  - 开发体验提升：Vue3.0提供了更好的开发体验，如新的Composition API、Teleport功能、Suspense功能、Fragments功能、自定义事件系统、生命周期钩子等。
## 安装
\`\`\`bash
npm install vue@next
\`\`\`

`;
</script>

<template>
  <router-link class="btn" to="/">返回</router-link>
  <div class="content">
    <div class="boxinside">
      <div v-html="marked(markdowntext)" class="md"></div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.content {
  width: 100%;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  padding: 1vw;

  .boxinside {
    padding: calc(1vw + 1vh);
    width: 60%;
    background-color: #f5f5f510;
    border-radius: 10px;
  }
}
</style>
