<template>
    <div class="route">
        <div class="sm-card">
            <p class="adress">Parklaan 11 &rarr; Vrijkade 23</p>
        <span class="info">
            <img src="..\..\..\..\src\assets\cycle.png"/>
            <span class="time">
            <p>17 : 15 &rarr; 18 : 00</p>
            </span>
        </span>
        </div>
        <img class="map" src="..\..\..\..\src\assets\kaart.png"/>
    </div>
</template>

<script>
    export default {
        name: 'route-one',
        methods: {
            // nextSlide: function () {
            //     $(".slider").slick('slickNext')
            // }
        }
    }
</script>

<style scoped>
.route {
    max-width: 310px;
    width: 70vw;
    height: 100vw;
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
