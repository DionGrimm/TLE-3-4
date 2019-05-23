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
            <RouteItem v-for="route in profile.routes" v-bind:key="route.name" v-bind:routeData="route"></RouteItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from './Scene';
import RouteItem from './RouteItem';

export default {
  name: 'Slider',
  components: {
    Scene,
    RouteItem
  },
  data() {
      return {
        socket : io('localhost:3000'),
        profile: {},
        user: localStorage.getItem('username'),
        routes : {}, // Hier staat de route in. Check in server.js de variabele "routesForClients" voor de structure
      }
  },
  methods:{
    sliderSetup: function(){
        $('.route-slider').slick({
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
          infinite: false,
          
        });
    },
    getData: function(){
      ioreq(this.socket).request("GETUSER", {user: this.user})
      .then((res) => {
        this.profile = res;
        console.log(this.profile.username)
        setTimeout(() =>{
          this.sliderSetup();
        }, 1);
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },

    getAI: function(){
      let app = this;

      ioreq(this.socket).request("BRAIN", {user: app.user})
      .then(function(res){
        app.routes = res
        console.log(app.routes)
      })
      .catch(function(err){
        console.error(err.stack || err);
        app.$router.push('/404');
      })
    },
  },
  mounted: function(){
    this.getData();
    this.getAI();
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
