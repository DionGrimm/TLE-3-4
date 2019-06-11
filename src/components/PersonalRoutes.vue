<template>
  <div class="main animation">
    <div class="background">
    </div>
    <div class="content-wrapper">
        <div class="top"> 
            <Header/>
            <div class="routeStep" v-for="(route, index) in this.profile.routes" v-bind:key="index">
                <div class="div" @click="selectRoute(route.route)">
                <p class="title">{{route.title}}</p>
                    <p class="adress">{{route.from}} &rarr; {{route.to}}</p>
                </div>
            </div>
            
            <router-link class="btn circle" to="/routes/add">+</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
    name: 'personalRoute',
    components: {
        Header
    },
    data() {
        return{
            profile: {},
            selected: null,
            user: localStorage.getItem('username'),
        }
    },
    methods: {
        getData: function(){
            let app = this;
            ioreq(socket).request("GETUSER", {user: this.user})
            .then(function(res){
                app.profile = res;
            })
            .catch(function(err){
                console.error(err.stack || err);
            });
        },
        selectRoute: function(r){
            this.$router.push({ name: 'mainslider', params: {route: r }})
        }
    },
    mounted(){
        //Get user data on load
        this.getData();
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
    width: 100%;
    margin-top: 70px;
}

// .header{
//     width: 100%;
//     height: 10%;
//     display: flex;
//     justify-content: space-between;
//     background-color: $lighter-orange;
// }

// .back{
//     height: 50%;
//     margin: auto 2%;
// }

// .logo_leaseplan{
//     height: 70%;
//     width: 20%;
//     margin: auto 2%;
// }

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
