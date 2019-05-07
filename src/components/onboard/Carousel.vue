<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
        <div class="content-blank">
        <h6>Kies de beste route</h6>
        <div class="scene">
            <p>17 : 15</p>
            <img src="..\..\..\src\assets\clouds.png"/>
            <p>11 &deg;C</p>
        </div>
        <slick class="slider" >
            <div  v-bind:key="route" v-for="route in routes">
              <route-one></route-one>
            </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import RouteOne from './routes/RouteOne';
import $ from 'jquery';
window.$ = window.jQuery = $;
import Slick from 'vue-slick'

export default {
  name: 'Homepage',
  component: {
    RouteOne,
    Slick
  },
  data() {
    return {
        routes : [1,2,3]
    }
  },
  
  sliderSetup: function () {
      $('.slider').slick({
          lazyLoad: 'ondemand',
          accessibility: false,
          arrows: false,
          draggable: true,
          mobileFirst: true,
          swipe: true,
          centerMode: true,
          dots: true,
          infinite: false
      });
  },
}


</script>

<style scoped lang="scss">
.content-blank {
    max-width: 310px;
    width: 70vw;
    max-height: 100vh;
    position: absolute;
    margin: 2vh;
    text-align: center;
}
</style>
