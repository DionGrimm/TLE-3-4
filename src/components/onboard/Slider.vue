<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

     <div class="content-wrapper">
      <div class="routes">
        <scene/>
        <div class="route-slider">
            <route title=""></route>
            <route title=""></route>
            <route title=""></route>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from './Scene';

export default {
  name: 'Slider',
  components: {
    Scene
  },
  methods:{
    sliderSetup: () => {
      $('.route-slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: true,
        infinite: false,
        
      });
    }
  },
  mounted: function(){
    this.sliderSetup();
  }
}
</script>

<style scoped lang="scss">
.routes{
    max-height: 800px;
    width: 100%;
    text-align: center;
}

.route-slider{
  width: 100%;
}

.route-item{
  color: #FFFFFF;
  width: 100%;
  height: 500px;
  background-color: $main-orange;
}
</style>
