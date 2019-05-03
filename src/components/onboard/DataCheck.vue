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
        <div class="input-item">
          <label for="name">Naam</label>
          <input type="text" id="name" v-model="profile.name">
        </div>
        <hr>
        <div class="input-item">
          <label for="from">Geboortedatum</label>
          <input type="text" id="birth" v-model="profile.birth">
        </div>
        <hr>
        <div class="input-item">
          <label for="to">Werkgever</label>
          <input type="text" id="employer" v-model="profile.employer">
        </div>
        <hr>
        <div class="input-item large-label">
          <label for="time1">Rijbewijs</label>
          <input type="checkbox" id="license" v-model="profile.license">
        </div>
        <hr>

        <input type="submit" class="btn" @click="saveProfile" value="Ga verder">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DataCheck',
  data() {
      return {
        socket : io('localhost:3000'),
        profile: {},
      }
  },
  methods: {
    saveProfile: function(){

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


#birth, #employer{
    width:130px;
}
#license{
    box-shadow: none;
} 



</style>
