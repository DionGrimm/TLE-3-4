<template>    
    <div class="scene">
        <p>{{time}}</p>
        <img :src="getImgUrl(weather)"/>
        <p>{{temp}}  &deg;C</p>
    </div>
</template>

<script>
    export default {
        name: 'scene',
        props:{
            time : String,
            temp: Number,
            weather: Number
        },
        methods: {
            getImgUrl(w){
            console.log(w)
            let img ="";
            if(w == 0) img = "sun.png";
            if(w == 1) img = "wind.png";
            if(w == 2) img = "rain.png";

            return require('@/assets/weather/'+img)
            }
        },
        mounted() {
            
        },
    }
</script>

<style lang="scss" scoped>
.scene {
    max-width: 310px;
    width: 100%;
    min-height: 20%;
    background-color: white;
    margin: 8% auto;
    text-align: center;
    display: flex;
    align-content: space-between;
    justify-content: space-evenly;
    align-items: center;
}
img {
    width: 60px;;
}
p {
    padding: 0 .2em;
    font-size: 1.6em;
}
</style>