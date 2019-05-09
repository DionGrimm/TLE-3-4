<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">{{from}} &rarr;  {{to}}</p>
        <span class="info">
            <img src="@/assets/cycle.png"/>
            <span class="time">
            <p>17 : 15 &rarr; 18 : 00</p>
            </span>
        </span>
        </div>
        <img class="map" src="@/assets/kaart.png"/>
    </div>
</template>

<script>

// import Vue from 'vue';
// Vue.forceUpdate();

    export default {
        name: 'route',
        props:{
            user: {
                type: Object,
                default: {
                    from: '',
                    to: ''
                } 
            }
        },
        data(){
            return{
                from : '',
                to : ''
            }
        },
        methods: {
            getRoute: function(){
                // Route van de user koppelen aan de card
                // this.$forceUpdate();
                // this.from = this.user.routes[0].from
                // this.to = this.user.routes[0].to
            },
        },
        mounted: function() {
            this.getRoute();
            console.log(this.user)
            console.log(this.from);
            console.log(this.to);   
        },
    }
</script>

<style scoped>
.route {
    max-width: 310px;
    width: 70%;
    background-color: white;
    margin: 5vh 0;
    text-align: center;
    align-content: space-between;
    justify-content: space-around;
}
.map {
    height: 70vw;
    width: 100%;
    border-top: 2px solid #FF9C1A;
    margin: 0;
}
.sm-card{
    height: calc(30vw - 2em); 
    width: 100%; 
    padding: 1em 0;
}
img {
    width: 15%;
    margin: .8em;
}
.adress {
    padding: 0 1em;
    margin: 0;
    font-size: 1em;
    color: #E18030;
}
p {
    padding: 0 1em;
    font-size: 0.8em;
    color: black;
}   
.info {
    display: flex;
    padding: 0.5em 1em;
    justify-content: space-around;
    align-items: center;
}
</style>
