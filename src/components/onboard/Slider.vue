<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

     <div class="content-wrapper">
      <div class="routes">
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

export default {
  name: 'Slider',
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
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    text-align: center;
}

.route-slider{
  position: absolute;
  width: 100%;
}

.route-item{
  color: #FFFFFF;
  width: 100%;
  height: 500px;
  background-color: $main-orange;
}

.center .slick-center h3{-moz-transform:scale(1.08);-ms-transform:scale(1.08);-o-transform:scale(1.08);-webkit-transform:scale(1.08);color:#e67e22;opacity:1;transform:scale(1.08);}
</style>
