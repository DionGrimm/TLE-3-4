<template>
  <div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <div class="top" v-if="steps[0]"> 
            <div class="header">
                <img src="@/assets/left-arrow.png" class="back" on-click="">
                <h6>Mijn Route</h6>
                <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">
            </div>
            <div class="title"><p>{{steps[0].from}} &rarr; {{steps[steps.length-1].to}}</p></div>
            <div class="routeStep" v-for="(step, index) in steps"  v-bind:key="index">
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
    props:{
        route : Object,
    },
    data() {
        return{
            // route: {
            //     input: { foot: 3, car: 20, step: 0, bike: 0, scooter: 0 }, 
            //     order: [0, 1], 
            //     eta: "10:13", 
            //     locations: ["Europalaan 3", [{ location: "Rochussenstraat 8 Rotterdam" }], "Parklaan 14"],
            // },

            steps: []
                // step1: {
                //     transport: 0,
                //     from: "Parklaan 11",
                //     to: "Parklaan 8",
                //     start: "07:15",
                //     end: "07:30"
                // },


        }
    },
    methods: {
        getImgUrl(w){
            // console.log(w)
            let img ="";
            if(w == 0) img = "walk.png";
            if(w == 1) img = "car.png";
            if(w == 2) img = "step.png";
            if(w == 3) img = "bike.png";
            if(w == 4) img = "scooter.png";

            return require('@/assets/transport/'+img)
        },
        getTransport(w){
            // console.log(w)
            let transport ="";
            if(w == 0) transport = "foot";
            if(w == 1) transport = "car";
            if(w == 2) transport = "step";
            if(w == 3) transport = "bike";
            if(w == 4) transport = "scooter";

            return transport
        },
        getRouteSteps(){
            for(let i =0; i < this.route.order.length; i++){
                var transport = this.route.order[i]
                console.log('vervoersmiddeltijd: ' + this.route.input[this.getTransport(this.route.order[i])])
                var time = this.route.eta.split(':')
                var newHour = parseInt(time[0])
                var newMinutes = parseInt(time[1]) + this.route.input[this.getTransport(this.route.order[i])]
                if(newMinutes >= 60){
                    newHour += 1
                    newMinutes -= 60
                }
                var start = this.route.eta  
                console.log(newHour + ':' + newMinutes)
                // overschrijft de toekomstige starttijd
                this.route.eta = newHour + ':' + newMinutes
               
                // als je in het object zit
                if(i != 0 && i != this.route.order.length){
                    console.log("speciaal")
                    var adresOne = this.route.locations[1][i-1].location                     
                }else{
                    var adresOne = this.route.locations[i]
                }

                // als je in het object zit voor het 2e adres
                if(i+1 != 0 && i+1 != this.route.order.length){
                    console.log("speciaal")
                    var adresTwo = this.route.locations[1][i].location
                }else{
                    var adresTwo = this.route.locations[i+1]
                }

                console.log(i);
                
                console.log('-------------');

                this.steps.push({
                    transport: transport,
                    from: adresOne,
                    to: adresTwo,
                    start: start,
                    end: this.route.eta
                })
                
            }
        },
    },
  mounted(){
    //Get user data on load
    this.getRouteSteps();
  }
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
    font-weight: 1000;
}

.routeStep{
    display: flex;
    justify-content: start;
    border-bottom: 1px $light-orange solid;
    width: 100%;
    height: 15%;
}

.transport{
    max-height: 45%;
    max-width: 5%;
    margin: auto 10%;
}

.btn {
    margin-top: 160%;
    position: fixed;
}
</style>
