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
        <div class="content-container">
          <label>{{routeWork.title}}</label><br>
          <span>{{routeWork.from}} - {{routeWork.to}}</span>
          <p><span>M </span><span>D </span><span>W </span><span>D </span><span>V </span><span>Z </span><span>Z </span></p>
        </div>
        <hr>

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
        socket : io('localhost:3000'),
        profile: {},
        user: this.$route.params.user,
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
    },      
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: this.user})
      .then(function(res){
        app.profile = res;
        app.routeWork = app.profile.routes.find(obj => {
            return obj.title === 'Huis - Werk'
        })
      })
      .catch(function(err){
        console.error(err.stack || err);
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
.main{}

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


</style>
