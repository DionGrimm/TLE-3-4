<template>
  <div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <div class="top"> 
            <div class="header">
                <img src="@/assets/left-arrow.png" class="back">
                <h6>Mijn Route</h6>
                <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">
            </div>
            <div class="title"><p>Rotterdam Centraal &rarr; Parklaan 11</p></div>
            <div class="routeStep">
                <img src="@/assets/transport/walk.png" class="transport">
                <div class="info">
                    <p class="adress">Parklaan 11 &rarr; Parklaan 8</p>
                    <p class="time">07:15 &rarr; 07:30</p>
                </div>
            </div>
        </div>
        <div class="btn">RESERVEER ROUTE</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'plannedRoute',
    // data() {
    //     steps: {
    //         transport: walk.png;
    //         adress: Parklaan 11
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.content-wrapper{
    flex-direction: column !important;
    justify-content: space-between;
}

.top{
    height: 90%;
}

.header{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: $lighter-orange;
}

.back{
    height: 50%;
    margin: auto 2%;
}

.logo_leaseplan{
    height: 70%;
    width: 20%;
    margin: auto 2%;
}

.title{
    border-bottom: 1px solid $light-orange;
    width: 100%;
    text-align: center;
    height: 6%;
}

.routeStep{
    display: flex;
    justify-content: start;
    border-bottom: 1px $light-orange solid;
    width: 100%;
    height: 15%;
}

.transport{
    height: 45%;
    margin: auto 10%;
}

.btn {
    margin-top: 160%;
    position: fixed;
}
</style>
