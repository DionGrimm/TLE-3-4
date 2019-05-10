<template>    
    <div class="scene">
        <p>{{this.time}}</p>
        <img v-bind:src="img"/>
        <p>{{this.temp}}  &deg;C</p>
    </div>
</template>

<script>
    export default {
        name: 'scene',
        data(){
          return {  
            time: '',
            img: '',
            temp: ''
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
                if(this.title === 0){
                    this.time = '17 : 00'
                    this.img = '/clouds.png'
                    this.temp = '11'
                } else if(this.title === 1){
                    this.time = '17 : 15'
                    this.img = '@/assets/clouds.png'
                    this.temp = '11'
                } else {                    
                    this.time = '17 : 30'
                    this.img = '@/assets/clouds.png'
                    this.temp = '11'
                }
            }
        },
        mounted() {
            this.setScene();
            console.log(this.title)
        },
    }
</script>

<style scoped>
.scene {
    width: 100%;
    min-height: 6vh;
    background-color: white;
    margin: 2vh 0;
    text-align: center;
    display: flex;
    align-content: space-between;
    justify-content: space-evenly;
}
img {
    height: 6vh;
    padding: 1.4em 1.2em;
}
p {
    padding: 0 .2em;
    font-size: 1.6em;
}
</style>