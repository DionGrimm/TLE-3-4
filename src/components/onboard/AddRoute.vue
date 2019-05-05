<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <h3 class="card-title">Voeg bestemming toe</h3>
        <hr>
        <div class="input-item">
          <label for="name">Naam</label>
          <input type="text" id="name" v-model="route.title" placeholder="Kies een naam">
        </div>
        <hr>
        <div class="input-item">
          <label for="from">Van</label>
          <input type="text" id="from" v-model="route.rom" placeholder="Kies een locatie">
        </div>
        <hr>
        <div class="input-item">
          <label for="to">Naar</label>
          <input type="text" id="to" v-model="route.to" placeholder="Kies een locatie">
        </div>
        <hr>
        <div class="input-item large-label xl">
          <label for="time1">Verktrek heenreis</label>
          <input class="orange" type="text" id="time1" v-model="route.time1" value="09:00">
        </div>
        <hr>
        <div class="input-item large-label xl">
          <label for="time2">Verktrek terugreis</label>
          <input class="orange" type="text" id="time2" v-model="route.time2" value="17:30">
        </div>
        <hr>

        <input type="submit" class="btn" @click="saveRoute" value="Bewaar route">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'AddRoute',
  data() {
      return {
        route: {},
        socket : io('localhost:3000'),
        profile: {}
      }
  },
  methods: {
    saveRoute: function(){
      if (this.isEmpty(this.route)) return;

      //Save new route to profile
      this.profile.routes.push(this.route);
      this.route = {};
      
      //Send updated profile to backend
      this.socket.emit('SAVE', {
       user: "frank",
       data: this.profile
      });
    },
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: "frank"})
      .then(function(res){
        console.log(res);
        app.profile = res;
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    }

  },
  mounted(){
    //Get user data on load
    this.getData();
  }
}
</script>

<style scoped lang="scss">
.main{}
</style>
