<script setup>
import "sober";
import { marked } from "marked";
const markdowntext = `
# 一个 brainfuck 语言解释器
> Github: [https://github.com/xnors/bfinter](https://github.com/xnors/bfinter)

## 介绍

这是一个用 brainfuck 语言编写的解释器, 可以运行 brainfuck 代码, 也可以编译 brainfuck 代码成可执行文件, 还可以编译 brainfuck 代码成 C 语言文件.


## 特性

- 支持运行 brainfuck 代码
- 支持编译 brainfuck 代码成可执行文件
- 支持编译 brainfuck 代码成 C 语言文件
- 支持 brainfuck 命令行模式
- 支持检查 brainfuck 文件的可运行性


## 用法：
\`./bfinter run <filename>\` 运行 brainfuck 文件

\`./bfinter compile <filename>\` 编译 brainfuck 文件成可执行文件

\`./bfinter outc <filename>\` 编译 brainfuck 文件成 C 语言文件

\`./bfinter cmd <brainfuck-command>\` 执行 brainfuck 命令(代码)

\`./bfinter check <filename>\` 检查 brainfuck 文件的可运行性

## 注意:
如果代码里面有无限循环, 检查器将不会有反应.
这样可能会占用极多内存资源.

所以,运行前请确认代码里面没有无用的无限循环

## 作者
- [XnorsCode(异或工作室)](https://github.com/xnors) 的 [Fexcode](https://github.com/fexcode)

---

# 一个 brainfuck 语言解释器
> Github: [https://github.com/xnors/bfinter](https://github.com/xnors/bfinter)

## 介绍

这是一个用 brainfuck 语言编写的解释器, 可以运行 brainfuck 代码, 也可以编译 brainfuck 代码成可执行文件, 还可以编译 brainfuck 代码成 C 语言文件.


## 特性

- 支持运行 brainfuck 代码
- 支持编译 brainfuck 代码成可执行文件
- 支持编译 brainfuck 代码成 C 语言文件
- 支持 brainfuck 命令行模式
- 支持检查 brainfuck 文件的可运行性


## 用法：
\`./bfinter run <filename>\` 运行 brainfuck 文件

\`./bfinter compile <filename>\` 编译 brainfuck 文件成可执行文件

\`./bfinter outc <filename>\` 编译 brainfuck 文件成 C 语言文件

\`./bfinter cmd <brainfuck-command>\` 执行 brainfuck 命令(代码)

\`./bfinter check <filename>\` 检查 brainfuck 文件的可运行性

## 注意:
如果代码里面有无限循环, 检查器将不会有反应.
这样可能会占用极多内存资源.

所以,运行前请确认代码里面没有无用的无限循环

## 作者
- [XnorsCode(异或工作室)](https://github.com/xnors) 的 [Fexcode](https://github.com/fexcode)


`;
</script>

<template>
  <div class="content">
    <div class="boxinside">
      <div v-html="marked(markdowntext)" class="md"></div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100vh;
  padding: 1vw;

  .boxinside {
    padding: calc(1vw + 1vh);
    width: 60%;
    background-color: rgba(245, 245, 245, 0.082);
    border-radius: 10px;
  }
}

@media screen and (max-width: 768px) {
  * {
    font-size: 85%;
  }
  .content {
    .boxinside {
      background-color: #ffffff00;
      width: 100%;
      padding: calc(1vw + 1vh) calc(1.6vw + 1.6vh);
    }
  }
}
</style>
