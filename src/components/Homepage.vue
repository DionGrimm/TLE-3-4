<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
          <h1>Pagina's die beschikbaar zijn:</h1>
          <hr>
          <router-link class="btn" to="/">Homepage</router-link>
          <router-link class="btn" to="ai">AI</router-link>
          <router-link class="btn" to="info">Info</router-link>
          <router-link class="btn" to="routes">Route logica</router-link>
          <router-link class="btn" to="routes/add">Route frontend</router-link>
    </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Homepage',
}
</script>

<style scoped lang="scss">
ul{
  list-style: none;
}

li{
    margin: 10px;
}
</style>
