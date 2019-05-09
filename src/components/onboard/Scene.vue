<template>    
    <div class="scene">
        <p>17 : 15</p>
        <img src="@/assets/clouds.png"/>
        <p>11 &deg;C</p>
    </div>
</template>

<script>
    export default {
        name: 'scene',
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