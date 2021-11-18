import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/about', name: 'About', component: () => import('./views/About.vue'), meta: { title: 'About' } },
    { path: '/:path(.*)', component: NotFound, meta: { title: 'Not Found' } },
];

export default createRouter({
    routes,
    history: createWebHashHistory(),
});
