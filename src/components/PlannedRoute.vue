<template>
  <div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <div class="top"> 
            <div class="header">
                <img src="@/assets/left-arrow.png" class="back" on-click="">
                <h6>Mijn Route</h6>
                <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">
            </div>
            <div class="title"><p>{{steps.step1.from}} &rarr; {{steps.step4.to}}</p></div>
            <div class="routeStep" v-for="step in steps">
                <img :src="getImgUrl(step.transport)" class="transport">
                <div class="info" >
                    <p class="adress">{{step.from}} &rarr; {{step.to}}</p>
                    <p class="time">{{step.start}} &rarr; {{step.end}}</p>
                </div>
            </div>
        </div>
        <div class="btn" on-click="/unlock">RESERVEER ROUTE</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'plannedRoute',
    data() {
        return{
            steps: {
                step1: {
                    transport: 1,
                    from: "Parklaan 11",
                    to: "Parklaan 8",
                    start: "07:15",
                    end: "07:30"
                },
                step2: {
                    transport: 4,
                    from: "Parklaan 11",
                    to: "Havenweg 33",
                    start: "07:15",
                    end: "07:30"
                },
                step3: {
                    transport: 5,
                    from: "Havenweg 33",
                    to: "Plataanlaan 2",
                    start: "07:15",
                    end: "07:30"
                },
                step4: {
                    transport: 1,
                    from: "Plataanlaan 2",
                    to: "Rotterdam Centraal",
                    start: "07:15",
                    end: "07:30"
                }
            }
        }
    },
    methods: {
        getImgUrl(w){
            console.log(w)
            let img ="";
            if(w == 1) img = "walk.png";
            if(w == 2) img = "car.png";
            if(w == 3) img = "step.png";
            if(w == 4) img = "bike.png";
            if(w == 5) img = "scooter.png";

            return require('@/assets/transport/'+img)
        }
    },
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
