<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="logincontainer">

        <img src="../../assets/logo_leaseplan.png" class="logo_leaseplan">

        <div class="input-item">
          <input type="text" class="black" id="username" placeholder="Gebruikersnaam" v-model="username">
        </div>
        <div class="input-item">
          <input type="password" class="black" id="password" placeholder="Wachtwoord" v-model="password">
        </div>

        <button v-on:click="checkLogin" class="btn">Log in</button>
        <!-- <router-link class="btn" to="/datacheck">Aan de slag</router-link> -->
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',


  data() {
      return {
        socket : io('localhost:3000'),
        username: '',
        password: ''
      }
  },
  methods: {
    checkLogin: function(){
      let app = this;
      ioreq(this.socket).request("GETUSER", {user: app.username})
      .then(function(res){
        if(res != false){
          if(app.username == res.username && app.password == res.password){
            console.log("Correct login")
          }else{
            console.log("Fout wachtwoord")
          }
        }else{
          console.log("Foute username");
        }
      })
      .catch(function(err){
        console.error(err.stack || err);
      })
    }
  }
}

</script>

<style scoped lang="scss">
.main{}

.logincontainer{
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
    }    
}
</style>
