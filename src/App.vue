<template>
  <div id="app">
    <div class="content">
            <transition name="router-anim" enter-active-class="in" leave-active-class="out">
            <router-view></router-view>
            </transition>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
    margin: 0;
    padding: 0;
}
</style>
