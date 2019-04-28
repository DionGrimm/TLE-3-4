<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <h3 class="card-title">Voeg bestemming toe</h3>
        <hr>
        <div class="input-item">
          <label for="name">Naam</label>
          <input type="text" id="name" placeholder="Kies een naam">
        </div>
        <hr>
        <div class="input-item">
          <label for="from">Van</label>
          <input type="text" id="from" placeholder="Kies een locatie">
        </div>
        <hr>
        <div class="input-item">
          <label for="to">Naar</label>
          <input type="text" id="to" placeholder="Kies een locatie">
        </div>
        <hr>
        <div class="input-item large-label">
          <label for="time1">Verktrek heenreis</label>
          <input class="orange" type="text" id="time1" value="09:00">
        </div>
        <hr>
        <div class="input-item large-label">
          <label for="time2">Verktrek terugreis</label>
          <input class="orange" type="text" id="time2" value="17:30">
        </div>
        <hr>

        <input type="submit" class="btn" value="Bewaar route">
        

        <!-- <router-link class="btn" to="/">Volgende</router-link> -->
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'AddRoute',
}
</script>

<style scoped lang="scss">
.main{}
</style>
