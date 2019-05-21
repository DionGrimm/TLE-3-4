<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">{{routeData.from}} &rarr;  {{routeData.to}}</p>
            <span class="info">
                <img src="@/assets/cycle.png"/>
                <p>17 : 15 &rarr; 18 : 00</p>
            </span>
        </div>
        <div class="map">
            <RouteMap v-bind:from="routeData.from" :waypoints="[{location: 'Eindhoven'},{location: 'Antwerpen'}]" v-bind:to="routeData.to"></RouteMap>
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
