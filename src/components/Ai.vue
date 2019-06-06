<template>
  <div class="main animation">
      <h1>Ai</h1>

  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'Ai',
  data() {
      return {
          socket : io('leaseplanner.ga:3000'),
      }
  },
  methods: {
      
  },
  mounted() {
        this.socket.on('brain', (data) => {
            console.log(data);
        });
    }
}
</script>

<style scoped lang="scss">
.main{}
</style>
