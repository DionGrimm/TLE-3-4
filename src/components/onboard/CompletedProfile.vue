<template>
  <div class="main animation">
    <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">

        <div class="content">
          <h1>Uw profiel is compleet!</h1>
          <hr>
          <p>
            Bedankt voor het invullen van al uw voorkeuren.
          </p>
          <p>
            U kan uw instellingen ten alle tijden wijzigen via het menu.
          </p>
          <router-link class="btn" to="/homepage">Ga verder</router-link>
        </div>

      </div>
    </div>
</template>

<script>

export default {
  name: 'CompletedProfile',
}
</script>

<style scoped lang="scss">
.main{}

</style>
