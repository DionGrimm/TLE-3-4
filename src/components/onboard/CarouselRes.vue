<template>
    <div class="main animation">
        <div class="background">
            <div class="overlay"></div>
            <div class="main-background"></div>
            </div>
        <div class="content-wrapper">
            <div class="content-blank">
                <h6>Kies de beste route</h6>
                <scene v-bind:title="i"></scene>
                <div class="route-slider">
                    <route></route>
                    <route></route>
                    <route></route>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
        socket : io('localhost:3000'),
        user: localStorage.getItem('username'),
        profile: {},
        i: 1
        }
    },

    methods:{
        sliderSetup: () => {
        $('.route-slider').slick({
            lazyLoad: 'ondemand',
            accessibility: false,
            dots: true,
            infinite: false,
            arrows: false,
            centerMode: true,
            centerPadding: '10%',
            slidesToShow: 1,
        });
        }, 
    },

    mounted: function(){
        // this.getData();
        this.sliderSetup();
    }
}
</script>

<style lang="scss" scoped>
h6{
    margin: 10% 0;
}

.content-blank {
    width: 100%;
    max-height: 800px;
    min-height: 200px;
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.route-slider{
    width: 100%;
    min-height: 80%;
    margin: 7% 0;
}

</style>
