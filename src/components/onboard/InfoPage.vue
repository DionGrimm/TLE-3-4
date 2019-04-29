<template>
  <div class="main animation">
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

        <router-link class="btn" to="vehicles">Volgende</router-link>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Infopage',
}
</script>

<style scoped lang="scss">
.main{}
</style>
