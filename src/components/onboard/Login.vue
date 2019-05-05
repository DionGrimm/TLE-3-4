<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="logincontainer" v-on:keyup.enter="checkLogin">

        <img src="../../assets/logo_leaseplan.png" class="logo_leaseplan">

        <div class="input-item">
          <input type="text" class="black" v-bind:class="{ errorfield: usernameError }" id="username" placeholder="Gebruikersnaam" v-model="username">
        </div>
        <div class="input-item">
          <input type="password" class="black" v-bind:class="{ errorfield: passwordError }" id="password" placeholder="Wachtwoord" v-model="password">
        </div>
        
        <span class="errormessage" v-if="error">
          {{error}}
        </span>

        <button v-on:click="checkLogin" class="btn">Log in</button>
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
        password: '',
        error: '',
        usernameError: false,
        passwordError: false,
      }
  },
  methods: {
    checkLogin: function(){
      let app = this;
      app.usernameError = false;
      app.passwordError = false;
      app.error = '';
      
      if(app.username && app.password){
        ioreq(this.socket).request("GETUSER", {user: app.username})
        .then(function(res){
          if(res != false){
            if(app.username == res.username && app.password == res.password){
              app.$router.push({ name: 'datacheck', params: { user: res.username } })
            }else{
              app.error = 'Fout wachtwoord';
              app.passwordError = true;
            }
          }else{
            app.error = 'Foute gebruikersnaam';
            app.usernameError = true;
          }
        })
        .catch(function(err){
          console.error(err.stack || err);
        })
      }else{
        app.error = 'Vul alle velden in';
        app.passwordError = true;
        app.usernameError = true;
      }
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
      margin-top: 60px;
    }  
    
    img{
      margin-bottom: 60px;
      margin-top: 40px;
    }


}

</style>
