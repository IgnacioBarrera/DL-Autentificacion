<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'App',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        console.log('Hay usuario activo.')
      } else {
        console.log('No hay usuarios registrados')
      }
    });
  },
}
</script>

<style lang="scss">

</style>
