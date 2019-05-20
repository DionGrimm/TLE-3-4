<template>
  <Slide :crossIcon="false">
        <div>
          <h1>{{profile.name}}</h1>
          <span>{{profile.employer}}</span>
        </div>
        <router-link to='/homepage'><span>Reizen</span></router-link>
        <router-link to='/routes'><span>Routes</span></router-link>
        <router-link to='/maps'><span>Kaart</span></router-link>
        <router-link to='/homepage'><span>Probleem melden</span></router-link>
        <router-link to='/homepage'><span>Help</span></router-link>
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
