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
          <input type="text" class="black" id="username" placeholder="Gebruikersnaam">
        </div>
        <div class="input-item">
          <input type="password" class="black" id="password" placeholder="Wachtwoord">
        </div>

        <router-link class="btn" to="/">Log in</router-link>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',
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
}
</style>
