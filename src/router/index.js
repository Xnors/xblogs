import { createRouter, createWebHashHistory } from 'vue-router';
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
        path: '/xblogs/blog/:id',
        name: 'Blog',
        component: ()=>import("../blogs/BlogViewer.vue"),
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;