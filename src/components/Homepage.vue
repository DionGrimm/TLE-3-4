<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <Menu v-bind:profile="profile"/>
      <div class="transparentcontainer">
        <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">

        <div class="input-item">
          <v-select placeholder="Kies een route" :options="profile.routes" label="title">
            <template slot="option" slot-scope="route">
                 {{route.title}}
            </template>
          </v-select>
        </div>

        <button class="btn">Go</button>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Homepage',
  components: {
    Menu
  },
  data() {
      return {
        socket : io('localhost:3000'),
        profile: {},
        user: localStorage.getItem('username'),
      }
  },
  methods: {
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: this.user})
      .then(function(res){
        app.profile = res;
        app.profile.routes.push("");//add listitem for + button

        //click on toggle
        let toggle = document.getElementsByClassName("vs__dropdown-toggle")[0];
        toggle.addEventListener("click", app.addClick);
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    addClick: function(){
      //click on button
        let button = document.getElementsByClassName("vs__dropdown-menu")[0].lastElementChild;
        button.addEventListener("click", this.addRoute);
    },
    addRoute: function(){
      this.$router.push({ name: 'addroutes'});
    },
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