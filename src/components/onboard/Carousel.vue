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
            <img src="@/assets/clouds.png"/>
            <p>11 &deg;C</p>
        </div>
      </div>
        <div class="route-slider">
          <route title=""></route>
          <route title=""></route>
          <route title=""></route>
        </div>
      </div>
    
  </div>
</template>

<script>
import RouteItem from './RouteItem';
import $ from 'jquery';
window.$ = window.jQuery = $;
import Slick from 'vue-slick'

export default {
  name: 'Slider',
  component: {
    RouteItem,
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
          dots: true,
          infinite: false,
          arrows: false,
          centerMode: true,
          centerPadding: '4vw',
          slidesToShow: 1,
      });
    }
  },
  getData: function(){
    let app = this;
    ioreq(this.socket).request("GETUSER", {user: this.user})
    .then(function(res){
      app.profile = res;
    })
    .catch(function(err){
      console.error(err.stack || err);
    });
  },
    
  mounted: function(){
    this.sliderSetup();
    this.getData();
  }
}


</script>

<style scoped lang="scss">
.route-slider{
  top: 25%;
  width: 100%;
  route {
    width: 65vw;
  }
}

.content-blank {
  max-width: 310px;
  width: 65%;
  position: absolute;
  padding: 10px 20px 20px 20px;
  margin: 2vh;
  text-align: center;
}
</style>
