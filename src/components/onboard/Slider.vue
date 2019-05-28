<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

    <div class="content-wrapper">
      <situation/>
      <div class="routes">
        <scene v-if="routes.context" :time="routes.departure" :temp="routes.context.temp" :weather="routes.context.weather"/>
        <div class="route-slider">
          <RouteItem
            v-for="(option, index) in routes.options"
            v-bind:key="index"
            v-bind:routeData="option"
          ></RouteItem>
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
      socket: io("localhost:3000"),
      user: localStorage.getItem("username"),
      routes: {} // Hier staat de route in. Check in server.js de variabele "routesForClients" voor de structure, volgorde van de reisopties is van best passend en dan aflopend
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
    getAI: function() {
      ioreq(this.socket)
        .request("BRAIN", { user: this.user })
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
    }
  },
  mounted: function() {
    this.getAI();
  }
};
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
