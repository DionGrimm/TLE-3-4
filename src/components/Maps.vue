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
      }
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$refs["map"]);
      const directionsService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);

      geocoder.geocode({ address: 'Rotterdam' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(this.locations[0].position);
        map.setZoom(11);
      });

      var start = "Kruisplein 1";
      var end = "Wijnhaven 61";
      var request = {
        origin: start,
        destination: end,
        travelMode: 'BICYCLING'
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      });

    } catch (error) {
      console.error(error);
    }
  },
  methods:{
    calcRoute() {
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
