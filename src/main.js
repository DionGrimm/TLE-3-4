import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import Slick from 'vue-slick';
import RouteItem from './components/onboard/RouteItem';
import Scene from './components/onboard/Scene';
import vSelect from 'vue-select'

//Styling for v-select
import "vue-select/src/scss/vue-select.scss";


import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.component('slick', Slick);
Vue.component('route', RouteItem)
Vue.component('scene', Scene)
Vue.component('v-select', vSelect)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAvSRmwlMQ6iiiyqmZ3YcPD5WPrE28U8SE',
    libraries: 'places, directions', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

import io from 'socket.io-client';
import ioreq from 'socket.io-request';

//Socket client
window.io = io;
window.ioreq = ioreq;

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

