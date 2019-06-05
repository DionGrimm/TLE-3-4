<template>
  <div class="header">
          <img src="@/assets/left-arrow.png" class="back" @click="$router.go(-1)">
          <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">
      </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
.main{}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  display: flex;
  background-color: $lighter-orange;
}

.back{
    height: 50%;
    margin: auto 4%;
}

.logo_leaseplan{
    height: 70%;
    width: 20%;
    margin: auto 4%;
}


</style>
