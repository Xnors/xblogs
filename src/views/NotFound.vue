<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>您访问的页面不存在。</p>
    <router-link to="/xblogs">返回首页</router-link>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
$backgroud-color: #1c1c1d;

.not-found {
  text-align: center;
  background-color: $backgroud-color;
}

.not-found h1 {
  font-size: 2em;
  color: #ff4d4f;
}

.not-found p {
  font-size: 1.2em;
  color: #666;
}

.not-found a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #315c48;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.not-found a:hover {
  background-color: #1b3127;
}
</style>
