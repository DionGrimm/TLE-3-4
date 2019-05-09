import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import Slick from 'vue-slick';
import RouteItem from './components/onboard/RouteItem';

import App from './App.vue';

Vue.component('slick', Slick);
Vue.component('route', RouteItem)

import io from 'socket.io-client';
import ioreq from 'socket.io-request';

//Socket client
window.io = io;
window.ioreq = ioreq;

//Jquery
window.$ = window.jQuery = require('jquery');

//Slick slider
window.slick = require('slick-carousel');

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

