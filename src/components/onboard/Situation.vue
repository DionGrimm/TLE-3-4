<template>
    <div v-show="visible" class="situation content-wrapper" >
        <div class="content">
            <h3>Situatie 1</h3>
            <hr>

            <h1>{{this.time}}</h1>

            <span>
                <img v-bind:src="img"/>
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
            time: '',
            img: '',
            temp: '',
            description: '',
            visible: true
          }
        },
        props:{
            title:  {
                type: Number,
                default: 0
            }
        },
        methods: {
            setScene: function(){
                this.time = '07 : 15'
                this.img = '@/assets/sunny.png'
                this.temp = '14'
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
    height: 20%;
}
p {
    padding: 0 .2em;
    font-size: 1.6em;
}

</style>