<script setup>
import { Snackbar } from "sober";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  routeurl: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const snackbar = ref(null);

// 监听路由变化
const closeSnackbarOnRouteChange = () => {
  if (snackbar.value) {
    snackbar.value.close();
  }
};

onMounted(() => {
  router.afterEach(closeSnackbarOnRouteChange);
});

onUnmounted(() => {
  router.afterEach(closeSnackbarOnRouteChange);
});
</script>

<template>
  <s-ripple class="blog" @click="snackbar = Snackbar.builder('加载中...')">
    <router-link :to="routeurl" id="gotoBlog">
      <h2 id="title">{{ name }}</h2>
      <p id="desc">{{ desc }}</p>
      <p id="date">{{ date }}</p>
    </router-link>
  </s-ripple>
</template>

<style lang="scss" type="text/scss">
.blog {
  margin: min(calc(0.5vw + 0.5vh), 12px) max(calc(0.5vw + 0.5vh), 18px);
  padding: max(10px, calc(0.6vw + 0.6vh));
  background-color: #91919125;
  border-radius: calc(0.5vw + 0.5vh);
  width: 42%;

  #title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  #desc {
    font-size: 16px;
    margin-bottom: 10px;
    color: #bebebe;
  }
  #date {
    font-size: 14px;
    margin-bottom: 10px;
    color: #757575;
  }
  #gotoBlog {
    cursor: pointer;
  }

  transition: background-color 0.1s ease-in-out, transform 0.3s ease-in-out,
    border 0.3s ease-in-out, all 0.3s ease-in-out;

  border: 1px solid #75757502;
  &:hover {
    transform: translateY(-3px);
    border: 1px solid #bebebe;
  }
}
router-link {
  color: white;
}

@media screen and (max-width: 768px) {
  .blog {
    width: 92.5%;
  }
}
</style>