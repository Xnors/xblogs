# Welcome to XBlogs

**Xblogs** 是 [**XnorsCode/异或工作室**](https://github.com/xnors) 开发的一个的博客网站, 上面有 Xnors 团队成员的一些日常开发心得, 也会分享一些技术干货.

> 目前已被访问 **{{ visitCount.value }}** 次

## 使用

本博客网站以简洁为设计理念, 界面简洁, 易于操作

进入首页, 顶部是导航栏, 下方的卡片是博客文章列表, 点击卡片上方的淡蓝色标题可以进入文章详情页.

进入文章详情页后, 可以点击左上角 _XBlogs_ 字样左侧的房子图标, 切换到首页.

---

## 搜索技巧

- 如果想让搜索结果更准确, 可以手动在每个关键词之间添加空格以分词, 凡是 _标题/简介/关键字_ 中包含**任意一个**分词的都会被筛选出来. 程序会自动根据匹配到的分词数量排序博客文章.

- 如果想搜索到某个作者的文章, 可以在搜索框中输入`作者的名字 + 冒号(中英文都可以) + 关键词`, 程序会自动筛选出作者发布的包含关键词的文章.

> 例子:
>
> 搜索 `Fexcode:python yield`
> 会搜索到发布者为 Fexcode 创作的包含关键词 python 或 yield 的文章.

---

## 开发

### 使用的技术

- [Vue.js](https://cn.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Sober.js](https://soberjs.com/)
- [Marked.js](https://marked.js.org/)
- [Highlight.js](https://highlightjs.org/)
- [Scss](https://sass-lang.com/)
- [Vue-Router](https://router.vuejs.org/)

## 发布博客

这是异或工作室的博客, 如果你是异或的一员, 可以将你的创意 [发送给我们](#联系我们),
我们审阅通过后, 会将你的博客展示到网页上, 并署上你的名字

### 管理员发布流程

0. 准备好你的博客内容, 包括:

   - 博客标题
   - 博客介绍
   - 博客关键词
   - 博客正文(markdown 格式)
   - 博客作者
   - 博客发布日期

1. 将你的 markdown 文档放入 `public/mds` 文件夹中, 文件名为 `你的md文件名.md`

2. 套用博客模板, 并将博客内容填入模板中
   <br>
   模版(`src/blogs/_BLOGS_TEMPLATE.vue`):

   ```html
    <script setup>
    import { marked } from "marked";
    import hljs from "highlight.js";
    import { onMounted, nextTick, ref } from "vue";

    const markdowntext = ref("");

    const loadMd = async () => {
      try {
        // 这个 /xblogs 是为了保证 github pages 可以正常显示, 本地调试时要改成 /
        const response = await fetch("/xblogs/mds/***.md");
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
   ```

3. 注册路由 `src/router/index.js`

   ```javascript
   // src/router/index.js
   // ...
   const routes = [
     // ...
     {
       path: "/xblogs/blog/博客名",
       name: "博客名",
       component: () => import("../blogs/博客组件名.vue"),
     },
     // ...
   ];
   // ...
   ```

4. 填写博客信息 `src/blogs.js`

   ```javascript
   // src/blogs.js
   const blogs = [
     // ...
     {
       name: "名称",
       desc: "简介",
       keywords: ["关键词 1", "关键词 2"],
       date: "发布日期",
       author: "作者",
       routeurl: "路由地址(就是上面 3 中你自己设置的地址)",
       show: true,
     },
   ];
   // ...
   ```

## 联系我们

- 工作室邮箱: xnors-studio@outlook.com
- 管理员邮箱: 2734664632@qq.com
