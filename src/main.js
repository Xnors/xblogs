import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import "sober"

import hljs from 'highlight.js/lib/core'; // 只导入核心功能
import javascript from 'highlight.js/lib/languages/javascript.js'; // 按需导入语言
import python from 'highlight.js/lib/languages/python.js';
import css from 'highlight.js/lib/languages/css.js';
import html from 'highlight.js/lib/languages/xml.js';
import 'highlight.js/styles/atom-one-dark.css'; // 只导入 github 主题

// 注册语言
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

createApp(App).use(router).mount('#app')
