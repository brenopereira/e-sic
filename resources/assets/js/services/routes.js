import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // VAI MINHAS ROTAS AQUI
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../components/helps/index.vue') 
        },
        {
            path: '/auth/login',
            component: require('../components/users/index.vue') 
        }
    ]
});