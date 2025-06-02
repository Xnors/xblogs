const blogs = [
    {
        name: "Welcome to XBlogs!",
        desc: "欢迎使用 Xblogs! 点击这个卡片上方的蓝字可以查看网站使用教程!",
        keywords: ["教程", "新手", "XBlogs"],
        date: "2025-05-31",
        author: "Fexcode",
        routeurl: "/xblogs/blog/welcome",
        show: true,
    },
    {
        name: "Python隐藏特性: yield from",
        desc: "Python 3.3 引入了新的语法 yield from，可以用来简化生成器的编写。本文将介绍 yield from 的用法。",
        keywords: ["Python", "yield from", "生成器", "Python小技巧"],
        date: "2025-06-02",
        author: "Fexcode",
        routeurl: "/xblogs/blog/python-yield-from",
        show: true,
    },
].reverse()
export default blogs