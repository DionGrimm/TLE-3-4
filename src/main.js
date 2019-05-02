import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';

import App from './App.vue';

import io from 'socket.io-client';
import ioreq from 'socket.io-request';

window.io = io;
window.ioreq = ioreq;
window.$ = window.jQuery = require('jquery');

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
