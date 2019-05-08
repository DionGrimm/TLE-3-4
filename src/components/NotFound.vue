<template>
  <div class="main animation">
    <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">
      <div class="content">
        <h1>Something went wrong...</h1>
        <router-link class="btn" to="/">home</router-link>
      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'NotFound',
}
</script>

<style scoped lang="scss">
.content{
  background-color: transparent !important;
}
h1{
  color: $white;
  font-size: 2.3rem !important;
  font-weight: 700;
}

</style>
