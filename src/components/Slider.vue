<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>

    <div class="content-wrapper">
      <Header/>
      <div class="routes">
        <h2>Aanbevolen routes</h2>
        <div class="route-slider">
          <RouteItem
            v-for="(option, index) in routes.options"
            v-bind:key="index"
            v-bind:routeData="option"
            v-on:click.native="selectRoute(option, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import RouteItem from "./onboard/RouteItem";

export default {
  name: "Slider",
  components: {
    Header,
    RouteItem,
  },
  data() {
    return {
      user: localStorage.getItem("username"),
      routes: {}, // Hier staat de route in. Check in app.js de variabele "routesForClients" voor de structure, volgorde van de reisopties is van best passend en dan aflopend
      selectedRoute: localStorage.getItem("selectedRoute")
    }
  },
  methods: {
    sliderSetup: function() {
      $(".route-slider").slick({
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1.5,
        dots: true,
        infinite: false,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
      });
    },
    getAI: function() {
      //Dirty fix for making slider (semi-)dynamic
      ioreq(socket)
        .request("BRAIN", { user: this.user, route: this.selectedRoute })
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
    selectRoute(data, index){
      // Train AI (Dit moet eigenlijk op de reserveer route knop)
      let trainingData = this.routes.options
      socket.emit("TRAIN", {user: this.user, trainingData: trainingData, index: index})

      this.$router.push({ name: 'PlannedRoute'})
      localStorage.setItem("plannedRoute", JSON.stringify(data))
    }
  },
  mounted: function() {
    this.getAI()
    console.log(this.route)
  }
}
</script>

<style scoped lang="scss">
.header{
  background-color: transparent;
}
.routes {
  max-height: 800px;
  width: 100%;
  text-align: center;

  h2{
    color: white;
    font-size: 1.8em;
    margin-bottom: 47px;
  }
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
