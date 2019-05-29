<template>
  <Slide :crossIcon="false">
        <div>
          <h1>{{profile.name}}</h1>
          <span>{{profile.employer}}</span>
        </div>
        <router-link to='/homepage'>
          <i class="fas fa-map-marked-alt"></i>
          <span>Reizen</span>
        </router-link>
        <router-link to='/personalroutes'>
          <i class="fas fa-route"></i>
          <span>Routes</span>
        </router-link>
        <router-link to='/maps'>
          <i class="fas fa-map"></i>
          <span>Kaart</span>
        </router-link>
        <router-link to='/homepage'>
          <i class="fas fa-exclamation-circle"></i>
          <span>Probleem melden</span>
        </router-link>
        <router-link to='/homepage'>
          <i class="fas fa-question-circle"></i>
          <span>Help</span>
        </router-link>
      </Slide>
</template>

<script>

export default {
  name: 'Menu',
  props:{
    profile : Object
  }
}
</script>

<style scoped lang="scss">
.main{}

</style>
