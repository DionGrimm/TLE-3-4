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
          <input type="text" id="username" placeholder="Gebruikersnaam">
        </div>
        <div class="input-item">
          <input type="text" id="password" placeholder="Wachtwoord">
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
</style>0
