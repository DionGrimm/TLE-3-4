<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">{{from}} &rarr;  {{to}}</p>
            <span class="info">
                <img src="@/assets/cycle.png"/>
                <p>17 : 15 &rarr; 18 : 00</p>
            </span>
        </div>
        <div class="map">
            <RouteMap></RouteMap>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import RouteMap from '../RouteMap';

Vue.component('RouteMap', RouteMap);

export default {
    name: 'route',
    // props:{
    //     user: {
    //         type: Object,
    //         default: {
    //             from: '',
    //             to: ''
    //         } 
    //     }
    // },
    data(){
        return{
            from : '',
            to : ''
        }
    },
    methods: {
        getRoute: function(){
            // Route van de user koppelen aan de card
            this.from = this.user.routes[0].from
            this.to = this.user.routes[0].to
        },
    },
    mounted: function() {
        // this.getRoute();
        // console.log(this.user)
        // console.log(this.from);
        // console.log(this.to);   
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
