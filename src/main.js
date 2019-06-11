import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import vSelect from 'vue-select';
import { Slide } from 'vue-burger-menu'; //Slide animation
import App from './App.vue';

//Styling for v-select
import "vue-select/src/scss/vue-select.scss";


//register components
Vue.component('v-select', vSelect)
Vue.component('Slide', Slide)


import io from 'socket.io-client';
import ioreq from 'socket.io-request';

//Socket client
window.io = io;
window.ioreq = ioreq;
window.socket = io('localhost:3000');
// 'leaseplanner.ga:3000'
//Jquery
window.$ = window.jQuery = require('jquery');

//Slick slider
window.slick = require('slick-carousel');

//Axios
window.axios = require('axios');

Vue.use(VueRouter)

Vue.config.productionTip = false

//Setup router
//Routes at routes.js
const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

//Setup app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')