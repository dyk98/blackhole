<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
  .wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
