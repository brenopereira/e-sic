require('./bootstrap');

import VueResource from 'vue-resource';
import Router from './services/routes.js';

window.Vue = require('vue');

Vue.use(VueResource);

Vue.component('esic', require('./templates/components/main.vue'));

new Vue({
    router: Router
}).$mount('esic');
