<template>
<div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <Header />
        <div class="btn" on-click="/unlock">Ik ben er!</div>
        <RouteMap />
    </div>
</div>
</template>
<script>
import Header from './Header'
import RouteMap from './RouteMap'

export default {
    components: {
        RouteMap,
        Header
    },
    props:{
        route : Object,
    },
    methods:{
        selectRoute: function(){
            this.$router.push({ name: 'routemap', params: {from: this.route.from, to: this.route.to}})
        },
    },
    mounted(){
        selectRoute()
    }
}
</script>

<style scoped lang="scss">
.btn{
    z-index: 99;
    margin-top: 150%;
    padding: 15px 64px;
    text-transform: none;
}

</style>
