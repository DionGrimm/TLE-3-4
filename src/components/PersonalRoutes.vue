<template>
  <div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <div class="top"> 
            <div class="header">
                <img src="@/assets/left-arrow.png" class="back" on-click="/homepage">
                <h6>Mijn Routes</h6>
                <img src="@/assets/logo_leaseplan.png" class="logo_leaseplan">
            </div>
            <div class="routeStep" v-for="route in routes" v-onclick=''>
                <p class="title">{{route.title}}</p>
                <p class="adress">{{route.from}} &rarr; {{route.to}}</p>
            </div>
            
            <router-link class="btn circle" to="/routes/add">+</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'personalRoute',
    data() {
        return{
            route: {
                "title": "School",
                "from": "Kruisplein 1",
                "to": "Wijnhaven 61",
                "time1": "8:30",
                "time2": "15:00",
                "route": 1
            },
            routes: []
        }
    },
    methods: {
        getRouteSteps(){    
            var title = this.route.title
            var adresOne = this.route.from
            var adresTwo = this.route.to

            this.routes.push({
                title: title,
                from: adresOne,
                to: adresTwo
            })
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

.routeStep{
    text-align: left;
    border-bottom: 1px $light-orange solid;
    width: 100%;
    height: 10%;
    padding: 0 5%;
}

.title{
  font-weight: bold;

}

.circle{
  margin-top: 120%;
  margin-left: 80%;
  width: 10%;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
