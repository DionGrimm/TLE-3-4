<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="transparentcontainer">

        <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">

        <div class="input-item">
          <v-select :options="profile.routes" label="title">
            <template slot="option" slot-scope="route">
              {{route.from}} - {{route.to}}
            </template>
          </v-select>
        </div>

        <button class="btn">Go</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Homepage',
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
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    editRoute: function(route){
      this.$router.push({ name: 'addroutes', params: { edit: route } })
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