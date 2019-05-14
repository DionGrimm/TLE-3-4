<template>
  <div class="main animation">
    <div class="background">
        <div class="overlay"></div>
        <div class="main-background"></div>
      </div>
      <div class="content-wrapper">

        <div class="content">
          <GmapMap
            :center="{lat:51.918128, lng:4.488430}"
            :zoom="14"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'Maps',
  data(){
    return{
      markers : [
        {position: {lat:51.918128, lng:4.488430}},
      ]
    }
  },
  methods:{
    
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
.main{}

.content{
    margin-top: 150px;
    margin-bottom: 40px;
}

</style>
