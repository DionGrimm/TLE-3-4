<template>
    <div v-show="visible" class="situation content-wrapper" >
        <div class="content situation">
            <h3>Situatie</h3>
            <hr>

            <h1>{{this.time}}</h1>

            <span>
                <img v-bind:src="getImgUrl(weather)"/>
                {{this.temp}}  &deg;C
            </span>

            <p>{{this.description}}</p>

            <button class="btn" @click="this.closeSituation">Bekijk Routes</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'situation',
        data(){
          return {  
            description: '',
            visible: true
          }
        },
        props:{
            time : String,
            temp: Number,
            weather: Number
        },
        methods: {
            getImgUrl(w){
            let img ="";
            if(w == 0) img = "sun.png";
            if(w == 1) img = "wind.png";
            if(w == 2) img = "rain.png";

            return require('@/assets/weather/'+img)
            },
            setScene: function(){
               
                this.description = 'Het is maandagochtend en overwegend zonnig. Je wilt om 08:00 uur op je werk zijn. Welke optie kies je?'
            },
            closeSituation: function(){
                this.visible = false;
            }
        },
        mounted() {
            this.setScene();
        },
    }
</script>

<style lang="scss" scoped>
.situation {
    position: absolute !important;
    background-color:rgba(0, 0, 0, 0.3);
    transform: translateY(-50%);
    top: 50%;
    margin-top:0px!important;
    margin-bottom:0px!important;
}

h3{
    margin: 0;
    text-align: left;
}
h1{
    font-size: 4em;
    display:block;
    margin-top:0.3em;
    margin-bottom: 0.3em;
}

span{
    color: $grey;
    font-size: 3em;
}

img {
    width: 80px;
    margin-bottom: -25px;
}
p {
    padding: 0 .2em;
    font-size: 1.6em;
}

</style>