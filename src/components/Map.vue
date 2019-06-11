<template>
    <div class="content-wrapper">
      <Header/>
      <VehicleMarkers/>
    </div>
</template>

<script>
import VehicleMarkers from './VehicleMarkers'
import Header from './Header'

export default {
  name: 'VehicleMap',
  components: {
    Header,
    VehicleMarkers
  },
};
</script>

<style scoped lang="scss">
.map{
    width: 100%;
    height: calc(100% - 70px);
    bottom: 0;
    position: absolute;
}

</style>
