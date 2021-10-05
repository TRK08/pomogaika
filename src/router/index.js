import VueRouter from 'vue-router'
import routes from './routes.js';

import store from '../store'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {

        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
});






export default router
