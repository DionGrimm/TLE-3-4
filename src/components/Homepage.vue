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
          <v-select placeholder="Kies een route" :options="profile.routes" label="title">
            <template slot="option" slot-scope="route">
              <div class="dropdownItem">
                 {{route.title}}
              </div>
              <hr>
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
        app.profile.routes.push("+");
        // this.appendPlus()
      })
      .catch(function(err){
        console.error(err.stack || err);
      });
    },
    editRoute: function(route){
      this.$router.push({ name: 'addroutes', params: { edit: route } })
    },
    // appendPlus(){
    //   let listItem = document.createElement("LI");
    //   let span = document.createElement("span").classList.add("plus");
    //   let node = document.createTextNode("+")
    //   node.appendChild(span);
    //   span.appendChild(listItem);
    //   document.getElementsByClassName("vs__dropdown-menu")[0].appendChild(listItem);
    // }
  },
  mounted(){
    //Get user data on load
    this.getData();
  }
}

</script>

<style scoped lang="scss">
.main{}

.dropdownItem {
  //do stuff
}



</style>