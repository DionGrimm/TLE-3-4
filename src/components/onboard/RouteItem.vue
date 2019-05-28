<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">{{routeData.locations[0]}} &rarr;  {{ routeData.locations[2] }}</p>
            <span class="info">
                <div class="icons">
                    <img v-for="icon in routeData.order" v-bind:key="icon" :src="getImgUrl(icon)">
                </div>
                <p>{{routeData.eta}} &rarr; 18 : 00</p>
            </span>
        </div>
        <div class="map">
            <RouteMap :from="routeData.locations[0]" :waypoints="routeData.locations[1]" :to="routeData.locations[2]"></RouteMap>
        </div>
        
    </div>
</template>

<script>
import RouteMap from '../RouteMap';

export default {
    name: 'route',
    components: {
        RouteMap
    },
    props:{
        routeData : Object,
    },
    methods:{
        getImgUrl(transport){
            let img ="";
            if(transport == 1) img = "walk.png";
            if(transport == 2) img = "car.png";
            if(transport == 3) img = "step.png";
            if(transport == 4) img = "bike.png";
            if(transport == 5) img = "scooter.png";

            return require('../../assets/transport/'+img)
        }
    },
}
</script>

<style scoped>
.route {
    max-width: 310px;
    height: 450px;
    position: relative;
}

.sm-card{
    width: 100%;
    height: 25%;
    background-color: white;
    display: inline-block;
}

.info {
    width: 100%;
    display: inline-flex;
    justify-content: space-around;

}

img {
    height: 50%;
    padding: auto;
}

.map {
    width: 100%;
    height: 75%
}
</style>
