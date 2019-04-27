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
          socket : io('localhost:3000'),
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
.main{
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: $light-orange;
}
</style>
