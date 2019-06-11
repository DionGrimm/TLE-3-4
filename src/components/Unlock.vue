<template>
  <div class="main animation">
    <div class="background">
      <div class="overlay"></div>
      <div class="main-background"></div>
    </div>
    <div class="content-wrapper">
      <div class="content">
         <h2>Sleutel voertuig</h2>
        <hr>

        <h2>Voertuig {{ message }}  </h2>
       
        <div class="unlock-buttons">
         <button class="btn-open" @click="doorOpen" >Open</button>
         <button class="btn-close" @click="doorClose">op slot</button>
         <br>
          <br>
          </div>
         <button class="btn-search" @click="carSearch">Zoek voertuig</button>
       
        <hr>

      <router-link class="btn" to="/">Kaart</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Unlock',
   data() {
    return {
      message: 'gesloten'}
  },
  methods: {
 
      
     doorOpen(){
        this.message = 'geopend'
        var ip = "192.168.137.143"
		var url = "http://192.168.137.143/lock/0"
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
      this.message = 'gesloten'
        var ip = "192.168.137.143"
		var url = "http://192.168.137.143/lock/1"
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

      carSearch(){
        this.message = 'gezocht'
        var ip = "192.168.137.143"
		var url = "http://192.168.137.143/search/1"
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


.unlock-buttons{
   padding: 15px 0px;

  display: flex;
  align-items: center;
  
}

.btn-open{
    width: 20em;
    background-image: linear-gradient(to right, #00FF09,#00D507);
  
    border: none;
    color: $white;
    padding: 15px 5px;
    margin: 0px 5px 0px 0px;;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1.1rem;
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
    padding: 15px 5px;
    margin: 0px 5px 0px 0px;;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1.1rem;
    letter-spacing: 0.8px;
    border-radius: 33px;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;

    &:hover{
        background-color: $light-orange;
    }
}

.btn-search{
    background-image: linear-gradient(to right,#2679ff, #004fd1,);
    border: none;
    color: $white;
    padding: 15px 32px;
    margin: 40px 0;
    text-decoration: none;
    display: block;
    font-size: 1.1rem;
    letter-spacing: 0.8px;
    border-radius: 33px;
    font-family: 'Didact Gothic', sans-serif;
    text-transform: uppercase;

    &:hover{
        background-color: $light-orange;
    }

}

</style>
