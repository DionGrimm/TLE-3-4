<template>
  <div class="map" ref="map"></div>
</template>

<script>
import gmapsInit from '../utils/Gmaps';

export default {
  name: 'VehicleMarkers',
  data() {
      return {
          locations : [
          {
            //wijnhaven
            position: {
              lat: 51.918109,
              lng: 4.488430,
            },
          },
          {
            position: {
              lat: 51.9198298,
              lng: 4.487603,
            },
          },
          {
            position: {
              lat: 51.918096,
              lng: 4.481359,
            },
          },
          {
            position: {
              lat: 51.924508,
              lng: 4.488677,
            },
          },
          {
            position: {
              lat: 51.924792,
              lng: 4.478045,
            },
          },
          {
            position: {
              lat: 51.913523,
              lng: 4.481867,
            },
          },
          {
            position: {
              lat: 51.925276,
              lng: 4.505902,
            },
          },
          {
            position: {
              lat: 51.922629,
              lng: 4.496805,
            },
          },
        ],
        google : {},
        directionsService : {},
        directionsDisplay : {},
      }
  },
  async mounted() {
    try {
      this.google = await gmapsInit();
      const geocoder = new this.google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);      
      this.directionsService = new this.google.maps.DirectionsService();
      this.directionsDisplay = new this.google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "#FF9C1A"
        }
      });

      this.directionsDisplay.setMap(map);

      map.setCenter(this.locations[0].position); //wijnhaven center
      map.setZoom(15);

      const markers = this.locations
      .map(x => new google.maps.Marker({ ...x, map }));
    } catch (error) {
      console.error(error);
    }
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
