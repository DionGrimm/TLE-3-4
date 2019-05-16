<template>
  <div class="map" ref="map"></div>
</template>
<script>
import gmapsInit from '../utils/Gmaps';
export default {
  name: 'Map',
  data() {
      return {
          locations : [
          {
            position: {
              lat: 51.918109,
              lng: 4.488430,
            },
          },
          {
            position: {
              lat: 51.924290,
              lng: 4.470047,
            },
          },
        ],
        google : {},
        map : {},
        directionsService : {},
        directionsDisplay : {},
      }
  },
  async mounted() {
    try {
      this.google = await gmapsInit();
      const geocoder = new this.google.maps.Geocoder();
      this.map = new this.google.maps.Map(this.$refs["map"]);
      this.directionsService = new this.google.maps.DirectionsService();
      this.directionsDisplay = new this.google.maps.DirectionsRenderer();

      this.directionsDisplay.setMap(this.map);

      geocoder.geocode({ address: 'Rotterdam' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        this.map.setCenter(this.locations[0].position);
        this.map.setZoom(11);
      });
      
      this.calcRoute();

    } catch (error) {
      console.error(error);
    }
  },
  methods:{
    calcRoute(start = "Kruisplein 1", end = "Wijnhaven 61") {
      var request = {
        origin: start,
        destination: end,
        travelMode: 'BICYCLING'
      };
      this.directionsService.route(request, (result, status) =>{
        if (status == 'OK') {
          this.directionsDisplay.setDirections(result);
        }
      });
    }
  }
}
</script>

<style scoped lang="scss">
.map{
    width: 100%;
    height: 100%;
    position: absolute;
}

</style>
