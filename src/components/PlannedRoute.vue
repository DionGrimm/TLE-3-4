<template>
  <div class="main animation">
    <div class="background"></div>
    <div class="content-wrapper">
      <div class="top" v-if="steps[0]">
        <Header/>
        <div class="title">
          <p>{{steps[0].from}} &rarr; {{steps[steps.length-1].to}}</p>
        </div>
        <div class="routeStep" v-for="(step, index) in steps" v-bind:key="index"
            v-bind:routeData="step"
            v-on:click="selectRoute(step)">
          <img :src="getImgUrl(step.transport)" class="transport">
          <div class="info">
            <p class="adress">{{step.from}} &rarr; {{step.to}}</p>
            <p class="time">{{step.start}} &rarr; {{step.end}}</p>
          </div>
        </div>
      </div>
      <div class="btn" v-on:click="selectRoute(step)">RESERVEER ROUTE</div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "plannedRoute",
  components: {
    Header
  },
  props: {
    route: Object
  },
  data() {
    return {
      // route: {
      //     input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 },
      //     order: [0, 1],
      //     eta: "10:13",
      //     locations: ["Europalaan 3", [{ location: "Rochussenstraat 8 Rotterdam" }], "Parklaan 14"],
      // },

      steps: [],
      // step1: {
      //     transport: 0,
      //     from: "Parklaan 11",
      //     to: "Parklaan 8",
      //     start: "07:15",
      //     end: "07:30"
      // },

    //   step: localStorage.setItem('steps'),
    };
  },
  methods: {
    getImgUrl(w) {
      // console.log(w)
      let img = "";
      if (w == 0) img = "walk.png";
      if (w == 1) img = "car.png";
      if (w == 2) img = "step.png";
      if (w == 3) img = "bike.png";
      if (w == 4) img = "scooter.png";

      return require("@/assets/transport/" + img);
    },
    getTransport(w) {
      // console.log(w)
      let transport = "";
      if (w == 0) transport = "foot";
      if (w == 1) transport = "car";
      if (w == 2) transport = "step";
      if (w == 3) transport = "bike";
      if (w == 4) transport = "scooter";

      return transport;
    },
    getRouteSteps() {
      let passedTime = this.route.departure;

      for (let i = 0; i < this.route.order.length; i++) {
        let addressOne;
        let addressTwo;
        let transport = this.route.order[i];

        let start = passedTime;

        let vehicleTime = this.route.input[
          this.getTransport(this.route.order[i])
        ];

        let time = passedTime.split(":");
        let newHour = parseInt(time[0]);
        let newMinutes = parseInt(time[1]) + vehicleTime;
        if (newMinutes >= 60) {
          newHour += 1;
          newMinutes -= 60;
        }

        if (newMinutes < 10) passedTime = newHour + ":0" + newMinutes;
        else passedTime = newHour + ":" + newMinutes;

        if (this.route.order.length == 1) {
          addressOne = this.route.locations[0];
          addressTwo = this.route.locations[1];
        } else {
          if (i != 0 && i != this.route.order.length - 1) {
            addressOne = this.route.locations[1][-1 + i].location;
            if (
              this.route.locations[1].length > 1 &&
              i < this.route.locations[1].length
            ) {
              addressTwo = this.route.locations[1][i].location;
            } else {
              addressTwo = this.route.locations[2];
            }
          } else if (i == 0) {
            addressOne = this.route.locations[0];
            addressTwo = this.route.locations[1][0].location;
          } else if (i == this.route.order.length - 1) {
            addressOne = this.route.locations[1][this.route.locations[1].length-1].location;
            addressTwo = this.route.locations[2];
          }
        }

        this.steps.push({
          transport: transport,
          from: addressOne,
          to: addressTwo,
          start: start,
          end: passedTime
        });
      }
    },
    selectRoute: function(){
        this.$router.push({ name: 'RouteStep', params: {step: this.step }})
    },
  },
  mounted() {
    //Get user data on load
    this.getRouteSteps();
    // if(step){

    // }
  }
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  flex-direction: column !important;
  justify-content: space-between;
}

.top {
  height: 90%;
  width: 100%;
  margin-top: 70px;
}

.title {
  border-bottom: 1px solid $light-orange;
  width: 100%;
  text-align: center;
  height: 6%;
  font-weight: 1000;
}

.routeStep {
  display: flex;
  justify-content: start;
  border-bottom: 1px $light-orange solid;
  width: 100%;
  height: 15%;
}

.transport {
  max-height: 45%;
  max-width: 5%;
  margin: auto 10%;
}

.btn {
  margin-top: 160%;
  position: fixed;
}
</style>
