<template>
  <div id="app" class="bg-light">
     <b-navbar toggleable="lg" type="dark" variant="dark">
       <b-navbar-brand> By Tage</b-navbar-brand>
     </b-navbar>
    <div class="container">
      <div class="d-flex justify-content-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
