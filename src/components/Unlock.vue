<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <h2>Ontgrendel voertuig</h2>
        <hr>
       
        <div class="input-item large-label" v-bind:class="{ errorfield: emptyLicense }">
         <button class="btn-open" @click="doorOpen" >Open</button>
         <button class="btn-close" @click="doorClose">op slot</button>
        </div>
        <hr>

      <router-link class="btn" to="/">Kaart</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Unlock',
 
  methods: {
 
      
     doorOpen(){
        var ip = "192.168.178.95"
		var url = "http://192.168.178.95/lock/0"
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": url,
			"method": "GET",
			"headers": {
			"cache-control": "no-cache",
			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
				
		$.ajax(settings).done(function (response) {
		});
     },

    doorClose(){
        var ip = "192.168.178.95"
		var url = "http://192.168.178.95/lock/1"
		var settings = {
		    "async": true,
		    "crossDomain": true,
		    "url": url,
		    "method": "GET",
		    "headers": {
			"cache-control": "no-cache",
			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'		
			}
		}
				
		$.ajax(settings).done(function (response) {
		});
     },
}
}

</script>

<style scoped lang="scss">
.main{}


#license{
  box-shadow: none;
} 

.btn-open{
    background-image: linear-gradient(to right, #00FF09,#00D507);
    border: none;
    color: $white;
    padding: 15px 32px;
    margin: 15px 0;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1.3rem;
    letter-spacing: 0.8px;
    border-radius: 33px;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;

    &:hover{
        background-color: $light-orange;
    }
}

.btn-close{
    background-image: linear-gradient(to right, #FF0000,#D50000);
    border: none;
    color: $white;
    padding: 15px 32px;
    margin: 15px 0;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1.3rem;
    letter-spacing: 0.8px;
    border-radius: 33px;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;

    &:hover{
        background-color: $light-orange;
    }

}

</style>
