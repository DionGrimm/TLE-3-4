<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
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
</template>

<script>

export default {
  name: 'InfoVehicles',
}
</script>

<style scoped lang="scss">
.main{}
</style>0
