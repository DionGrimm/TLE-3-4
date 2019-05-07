<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

     <div class="content-wrapper">
      <div class="content">
        <div class="route-slider">
          <div class="route-item">
            aaa
          </div>
          <div class="route-item">
            bbb
          </div>
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
          lazyLoad: 'ondemand',
          accessibility: false,
          arrows: false,
          mobileFirst: true,
      });
    }
  },
  mounted: function(){
    this.sliderSetup();
  }
}
</script>

<style scoped lang="scss">
.content{
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.route-slider{
  position: absolute;
  width: 90%;
}

.route-item{
  color: #FFFFFF;
  width: 100%;
  height: 500px;
  background-color: $main-orange;
}
</style>
