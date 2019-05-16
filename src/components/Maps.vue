<template>
  <div class="main animation">
    <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">
        <div class="map" ref="map"></div>
      </div>
    </div>
</template>
<script>
import gmapsInit from '../utils/Gmaps';
export default {
  name: 'Maps',
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$refs["map"]);

      geocoder.geocode({ address: 'Netherlands' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped lang="scss">
.map{
    max-width: 310px;
    width: 80%;
    min-height: 600px;
    position: absolute;
}

</style>
