<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content-blank">
        <h6>Kies de beste route</h6>
        <scene v-bind:title="i"></scene>
      </div>
      <div class="route-slider" v-if="!isEmpty(profile)">
        <route v-bind:user="profile" @click="$emit(nextRoute())"></route>
        <route v-bind:user="profile"></route>
        <route v-bind:user="profile"></route>
      </div>
    </div>
  </div>
</template>

<script>
import RouteItem from './RouteItem';
import Scene from './Scene';
import $ from 'jquery';
window.$ = window.jQuery = $;
import Slick from 'vue-slick'

export default {
  name: 'Slider',
  component: {
    RouteItem,
    Slick,
    Scene
  },
  data() {
    return {
      socket : io('localhost:3000'),
      user: localStorage.getItem('username'),
      profile: {},
      i: 1
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
          centerPadding: '5vw',
          slidesToShow: 1,
      });
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
    savePreference: function(){
      // Sla de voorkeur van de gebruiker op
    },
    nextRoute: function(){
      // Ga naar de volgende scene
      // Na 3x klaar 
      if(i < 3){
        // Naar de volgende scene
        i++
        return i
      } else {
        // Afsluiten 
      }
    },
    isEmpty: (obj) => {
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
        return false;
      }
      return true;
    },
  },
    
  mounted: function(){
    this.getData();
    this.sliderSetup();
    console.log(this.user);
    console.log(this.profile);
    console.log(this.i);
  }
}


</script>

<style scoped lang="scss">
.route-slider{
  top: 25%;
  width: 100%;
  margin: 0 10%;
}

.content-blank {
  width: 80%;
  position: absolute;
  padding: 10px 20px 20px 20px;
  margin: 2vh;
  text-align: center;
}
</style>


/*

  - goede styling
  - welke user is ingelogd?
  - welke route(s) hoort er bij deze user?
  - weergeef scene 1 met route 
  - wanneer route gekozen (onclick) -> nieuwe scene (3x)
  - gekozen route opslaan bij scene voor de ai

*/