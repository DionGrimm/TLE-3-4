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
        <div class="route-slider" >
              <route-one></route-one>
              <route-one></route-one>
              <route-one></route-one>
        </div>
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
  name: 'Slider',
  component: {
    RouteOne,
    Slick
  },
  data() {
    return {
        routes : [1,2,3]
    }
  },
  methods:{
    sliderSetup: () => {
      $('.route-slider').slick({
          lazyLoad: 'ondemand',
          accessibility: false,
          arrows: false,
          mobileFirst: true,
          ifinitive: false
      });
    }
  },
  mounted: function(){
    this.sliderSetup();
  }
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
