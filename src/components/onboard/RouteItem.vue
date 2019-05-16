<template>
    <div class="route">
        <div class="sm-card">
        <p class="adress">{{from}} &rarr;  {{to}}</p>
        <span class="info">
            <img src="@/assets/cycle.png"/>
            <p>17 : 15 &rarr; 18 : 00</p>
        </span>
        </div>
        <img class="map" src="@/assets/kaart.png"/>
    </div>
</template>

<script>

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
}

.sm-card{
    width: 100%;
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
    border-top: 2px solid #E18030;
    width: 100%;
    padding: 0;
}
</style>
