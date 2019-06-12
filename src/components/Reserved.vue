<template>
    <div v-show="visible" class="situation content-wrapper" >
        <div class="content situation">
            <h1>Voertuigen gereserveerd!</h1>

            <button class="btn" @click="close">Okay</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reserved',
        data(){
          return {  
            visible: true
          }
        },
        methods: {
            close: function(){
                this.visible = false;
            }
        },
        mounted() {
        },
    }
</script>

<style lang="scss" scoped>
.situation {
    position: absolute !important;
    background-color:rgba(0, 0, 0, 0.3);
    transform: translateY(-50%);
    top: 50%;
    margin-top:0px!important;
    margin-bottom:0px!important;
}

h1{
    display:block;
    margin-top:0.3em;
    margin-bottom: 0.3em;
}

</style>