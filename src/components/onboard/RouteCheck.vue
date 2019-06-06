<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <h3 class="card-title">Controleer uw gegevens</h3>
        <hr>
        <div class="checkroute" v-for="(route, index) in profile.routes" v-bind:key="route.title" @click="editRoute(route, index)">
          <div class="content-container">
            <label>{{route.title}}</label><br>
            <span>{{route.from}} - {{route.to}}</span>
            <div id="daypicker" class="daypicker">
              <span v-for="day in route.repeat" v-bind:key="day.day" v-bind:class="{ active: day.state}"> {{ day.label }}</span>
            </div>
          </div>
          <hr>
        </div>

        <router-link class="btn circle" to="/routes/add">+</router-link>

        <input type="submit" class="btn" @click="saveProfile" value="Ga verder">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RouteCheck',
  data() {
      return {
        socket : io('leaseplanner.ga:3000'),
        profile: {},
        user: localStorage.getItem('username'),
        routeWork: ''
      }
  },
  methods: {
    saveProfile: function(){
        //Send updated profile to backend
        this.socket.emit('SAVE', {
        user: this.profile.username,
        data: this.profile
        });
        this.$router.push({ name: 'infoai'});
    },      
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: this.user})
      .then(function(res){
        app.profile = res;
        // app.routeWork = app.profile.routes.find(obj => {
        //     return obj.title === 'Huis - Werk'
        // })
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    editRoute: function(route, index){
      this.$router.push({ name: 'addroutes', params: { edit: route, key: index  } })
    }
  },
  mounted(){
    //Get user data on load
    this.getData();
  }
}

</script>

<style scoped lang="scss">
.content-container{
    padding: 0 8px;
    width: 100%;
    text-align: left;

    label{
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
    } 
    p{
        font-size: 1.2rem !important;
        line-height: 1.1rem !important;
    }
}
input[type=submit]{
  display: inline-block;
  width: 70%;
  margin-left: 15px;
}

.circle{
  display: inline-block;
  width: 10% !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.checkroute{
  cursor: pointer;
}

.daypicker{
  width: 60%;
  padding-left: 0 !important;
}


</style>
