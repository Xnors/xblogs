import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    {
        path: '/xblogs',
        name: 'xblogs',
        component: Home,
        props: true,
    },
    {
        path: '/xblogs/blog/welcome',
        name: 'Welcome',
        component: () => import('../blogs/Welcome.vue'),
    },
    {
        path: '/xblogs/blog/python-yield-from',
        name: 'PythonYieldFrom',
        component: () => import('../blogs/PythonYieldFrom.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;