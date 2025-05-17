import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Vue3 from '../blogs/Vue3.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/blog/vue3',
        name: 'Vue3',
        component: Vue3,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;