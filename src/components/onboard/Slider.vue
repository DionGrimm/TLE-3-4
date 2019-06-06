<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

    <div class="content-wrapper">
      <situation v-if="routes.context" :time="routes.departure" :temp="routes.context.temp" :weather="routes.context.weather"/>
      <div class="routes">
        <scene v-if="routes.context" :time="routes.departure" :temp="routes.context.temp" :weather="routes.context.weather"/>
        <div class="route-slider">
          <RouteItem
            v-for="(option, index) in routes.options"
            v-bind:key="index"
            v-bind:routeData="option"
            v-on:click.native="selectRoute(routes, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from "./Scene";
import RouteItem from "./RouteItem";
import Situation from "./Situation";

export default {
  name: "Slider",
  components: {
    Scene,
    RouteItem,
    Situation
  },
  data() {
    return {
      socket : io('leaseplanner.ga:3000'),
      user: localStorage.getItem("username"),
      routes: {} // Hier staat de route in. Check in app.js de variabele "routesForClients" voor de structure, volgorde van de reisopties is van best passend en dan aflopend
    };
  },
  methods: {
    sliderSetup: function() {
      $(".route-slider").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        dots: true,
        infinite: false
      });
    },
    getAI: function(r) {
      ioreq(this.socket)
        .request("BRAIN", { user: this.user, route: r })
        .then((res) => {
          this.routes = res;
          setTimeout(() => {
            this.sliderSetup();
          }, 1);
        })
        .catch((err) => {
          console.error(err.stack || err);
          app.$router.push("/404");
        });
    },
    selectRoute(routes, index){
      //to-do Stuur data terug naar server
      if(this.$route.params.index < 2){
        let pageNumber = this.$route.params.index
        pageNumber++
        this.$router.push({name: 'slider', params: { index: pageNumber}});
        this.$router.go();
      }else{
        this.$router.push({name: 'completedprofile'});
      }
      
    }
  },
  mounted: function() {
    // console.log(this.$route.params.index )
    if(this.$route.params.index == 0 || this.$route.params.index == 1 || this.$route.params.index == 2){
      this.getAI(this.$route.params.index);
    }else{
      this.$router.push({path: '/404'});
    }
  }
}
</script>

<style scoped lang="scss">
.routes {
  max-height: 800px;
  width: 100%;
  text-align: center;
}

.route-slider {
  width: 100%;
}

.route-item {
  color: #ffffff;
  width: 100%;
  height: 500px;
  background-color: $main-orange;
}
</style>
