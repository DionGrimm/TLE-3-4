<template>
  <div class="main animation">
    <div id="screen1" class="animation" :class="{'out': infoScreen == 2}">
      <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">

        <div class="content">
          <h1>Welkom bij de LeasePlanner</h1>
          <hr>
          <p>
            Kortgeleden heeft u een mail ontvangen met instructies om deze app te gaan gebruiken. Met de app kunt u makkelijk uw reis van en naar het werk plannen.
          </p>
          <p>
            De LeasePlanner zal leren van uw gedrag en hierdoor persoonlijke routes aan kunnen bieden.
          </p>

          <button class="btn" @click="infoScreen = 2">Volgende</button>
        </div>

      </div>
    </div>

    <div id="screen2" class="animation in" v-if="infoScreen === 2">
      <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">

        <div class="content">
          <img src="../../assets/cycle.png" class="icon_vehicle">
          <img src="../../assets/motorbiking.png" class="icon_vehicle">
          <img src="../../assets/recreational.png" class="icon_vehicle">

          <p>
          Deze routes kunnen op verschillende manieren afgelegd worden. We streven er naar om zo groen en efficiënt mogelijk te vervoeren. We bieden daarom ook een fiets, step of elektrische scooter aan.
          </p>
          <hr>
          <p>
            Alle voertuigen zijn verspreid over de stad, zodat u vanaf elke bestemming snel kunt reizen.
          </p>

          <router-link class="btn" to="/login">Aan de slag</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Infopage',
  data() {
    return {
      infoScreen: 1
    }
  }
}
</script>

<style scoped lang="scss">
.main{}

.icon_vehicle{
    width:50px;
    margin:10px;        
}

#screen1{
  background-color: $white;
  position: absolute;
  z-index: 1;
}
#screen2{
  background-color: $white;
  position: absolute;
  z-index: 10;
}
</style>
