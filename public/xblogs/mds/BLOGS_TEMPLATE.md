## 发布博客

这是异或工作室的博客, 如果你是异或的一员, 可以将你的创意 [发送给我们](#联系我们),
我们审阅通过后, 会将你的博客展示到网页上, 并署上你的名字

### 管理员发布流程

1. 准备好你的博客内容, 包括:

   - 博客标题
   - 博客介绍
   - 博客关键词
   - 博客正文(markdown 格式)
   - 博客作者
   - 博客发布日期

2. 套用博客模板, 并将博客内容填入模板中

    模版(\`src/blogs/_BLOGS_TEMPLATE.vue\`):

    \`\`\`html
    <script setup>
    import { marked } from "marked";

    const markdowntext = \`
    ...
    \`;
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
    \`\`\`

3. 注册路由 \`src/router/index.js\`

    \`\`\`js
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
    \`\`\`

4. 填写博客信息 \`src/blogs.js\`

    \`\`\`js
    // src/blogs.js
    const blogs = [
    // ...
    {
        name: "名称",
        desc: "简介",
        keywords: ["关键词1", "关键词2"],
        date: "发布日期",
        author: "作者",
        routeurl: "路由地址(就是上面3中你自己设置的地址)",
        show: true,
    },
    ];
    // ...
    \`\`\`

## 联系我们

- 工作室邮箱: xnors-studio@outlook.com
- 管理员邮箱: 2734664632@qq.com
