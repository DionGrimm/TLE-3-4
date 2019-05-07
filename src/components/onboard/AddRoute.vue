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
          <input class="orange" type="time" id="time1" v-model="route.time1">
        </div>
        <hr>
        <div class="input-item large-label xl">
          <label for="time2">Verktrek terugreis</label>
          <input class="orange" type="time" id="time2" v-model="route.time2">
        </div>
        <hr>
        <div class="input-item">
          <label for="daypicker">Herhaal op:</label>
          <div id="daypicker" class="daypicker">
            <span v-for="day in route.repeat" v-bind:key="day.day" @click="selectDay(day)" v-bind:class="{ active: day.state}"> {{ day.label }}</span>
          </div>
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
        route: { "repeat": [
          {"label" : "M", "day": "maandag", "state" : false},
          {"label" : "D", "day": "dinsdag", "state" : false},
          {"label" : "W", "day": "woensdag", "state" : false},
          {"label" : "D", "day": "donderdag", "state" : false},
          {"label" : "V", "day": "vrijdag", "state" : false},
          {"label" : "Z", "day": "zaterdag", "state" : false},
          {"label" : "Z", "day": "zondag", "state" : false},
        ]},
        socket : io('localhost:3000'),
        profile: {},
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
       user: "frankdewit",
       data: this.profile
      });
    },
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: "frankdewit"})
      .then(function(res){
        console.log(res);
        app.profile = res;
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    isEmpty: (obj) => {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    },
    selectDay(day){
      if (day.state == false){
        day.state = true
      }else{
        day.state = false
      }
    }

  },
  mounted(){
    //Get user data on load
    this.getData();
  }
}
</script>

<style scoped lang="scss">
input[type=time]{
  margin-left: 15px;
  padding-left: 0px;
  padding-right: 0px;
}

</style>
