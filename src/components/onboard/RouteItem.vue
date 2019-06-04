<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">{{routeData.locations[0]}} &rarr;  {{ routeData.locations[2] }}</p>
            <span class="info">
                <div class="icons">
                    <img v-for="icon in routeData.order" v-bind:key="icon" :src="getImgUrl(icon)">
                </div>
                <p>{{routeData.departure}} &rarr; {{routeData.eta}}</p>
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
            if(transport == 0) img = "walk.png";
            if(transport == 1) img = "car.png";
            if(transport == 2) img = "step.png";
            if(transport == 3) img = "bike.png";
            if(transport == 4) img = "scooter.png";

            return require('@/assets/transport/'+img)
        }
    },
}
</script>

<style lang="scss" scoped>
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

.adress{
    text-align: left;
    padding-left: 30px;
    color: $main-orange;
    font-size: 1.1rem;
}

.info {
    width: 100%;
    left: 0;
    position: absolute;
    text-align: left;
    padding-left: 30px;

    .icons{
        display: inline-block;

        img{
            display: inline-block;
            margin-right: 10px;
        }
    }

    p{
        display: inline-block;
    }
}

.map {
    width: 100%;
    height: 75%
}
</style>
