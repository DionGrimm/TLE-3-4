<template>
  <div class="main animation">
      <h1>Routes</h1>

      <p v-for="route in profile.routes" v-bind:key="route.title">Route: {{ route.title }}: Van {{ route.from }} naar: {{ route.to }}</p>

      <input type="text" placeholder="Naam route" v-model="route.title">
      <br>
      <input type="text" placeholder="Van adres" v-model="route.from">
      <br>
      <input type="text" placeholder="Naar adres" v-model="route.to">
      <br>
      <button class="btn" type="button" @click="saveRoute">Sla route op</button>

  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: 'Routes',
  data() {
      return {
        route: {},
        socket : io('localhost:3000'),
        profile: {}
      }
  },
  methods: {
    saveRoute: function(){
      //Save new route to profile
      this.profile.routes.push(this.route)
      
      //Send updated profile to backend
      this.socket.emit('SAVE', {
       user: "frank",
       data: this.profile
      });
    },
    getData: function(){
      //Request profile data to back-end
      this.socket.emit('GETUSER', {
       user: "frank"
      });

      //Save data to local profile
      this.socket.on('USER', (data) => {
      this.profile = data;
    });
    }

  },
  mounted(){
    //Get user data on load
    this.getData();
  }
}
</script>

<style scoped lang="scss">
.main{
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: $light-orange;
}
</style>
