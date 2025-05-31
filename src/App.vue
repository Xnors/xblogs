<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <s-page theme="dark" style="min-height: 100%; width: 100%">
    <div class="appbar">
      <div style="display: flex; flex-direction: row; align-items: center">
        <router-link to="/xblogs">
          <s-icon-button>
            <s-icon name="home"></s-icon>
          </s-icon-button>
        </router-link>
        <div class="headline">XBlogs</div>
      </div>
    </div>
    <main>
      <RouterView />
    </main>
  </s-page>
</template>

<style lang="scss" type="text/scss" scoped>
$backgroud-color: #1c1c1d;

.appbar {
  background-color: $backgroud-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw;
  height: 6vh;

  .headline {
    font-size: 110%;
    margin-top: 3px;
    font-weight: bold;
  }
}
</style>
