import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../components/helps/index.vue')
        },
        {
            path: '/auth/login',
            component: require('../components/users/index.vue')
        },
        {
            path: '/ocorrencias',
            component: require('../components/helps/index.vue')
        },
        {
            path: '/ocorrencias/abrir',
            component: require('../components/helps/create-help.vue')
        }
    ]
});
