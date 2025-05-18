import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Bfinter from '../blogs/Bfinter.vue';


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
    },
    {
        path: '/xblogs/blog/bfinter',
        name: 'bfinter',
        component: Bfinter,
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