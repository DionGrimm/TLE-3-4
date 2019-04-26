<template>
  <div class="main">
    <div class="page">
      <h1>Homepage</h1>

      <p>
          Pagina's die beschikbaar zijn:
      </p>
      <ul>
          <li><router-link class="btn" to="/">/ : Homepage</router-link></li>
          <li><router-link class="btn" to="ai">/ai : AI</router-link></li>
          <li><router-link class="btn" to="info">/info : Info</router-link></li>
      </ul>
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
