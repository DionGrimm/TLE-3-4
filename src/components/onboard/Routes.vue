<template>
  <div class="main animation">
      <h1>Routes</h1>

      <p v-for="route in profile.routes" v-bind:key="route.title">Route: {{ route.title }}: Van {{ route.from }} naar: {{ route.to }}</p>

  </div>
</template>

<script>

export default {
  name: 'Routes',
  data() {
      return {
        socket : io('localhost:3000'),
        profile: {}
      }
  },
  methods: {
    getData: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: "frank"})
      .then(function(res){
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
</style>
