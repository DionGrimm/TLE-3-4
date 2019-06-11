<template>
  <div class="main animation">
      <h1>Ai</h1>

  </div>
</template>

<script>

export default {
  name: 'Ai',
  data() {
      return {

      }
  },
  methods: {
      
  },
  mounted() {
        window.socket.on('brain', (data) => {
            console.log(data);
        });
    }
}
</script>

<style scoped lang="scss">
.main{}
</style>
