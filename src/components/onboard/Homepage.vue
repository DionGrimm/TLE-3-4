<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="homecontainer">

        <img src="../../assets/logo_leaseplan.png" class="logo_leaseplan">

        <div class="input-item">
          <select>
              <option v-for="route in profile.routes">
                  {{ route.from }} - {{ route.to }}
              </option>
          </select>
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

.homecontainer{
    max-width: 310px;
    width: 65%;
    min-height: 200px;
    background-color: transparent;
    position: absolute;
    padding: 10px 20px 20px 20px;
    text-align: center;
    .input-item{
        padding:0px;
        input{
            width: 100%;
        }
    }
    button{
      width:100%;
      margin-top: 60px;
    }  
    
    img{
      margin-bottom: 60px;
      margin-top: 40px;
    }


}

</style>