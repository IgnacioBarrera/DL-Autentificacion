<template>
  <div id="app">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item v-if="this.uid"><router-link  to="/" class="texto_navbar">Home</router-link></b-nav-item>
            <b-nav-item v-else><router-link  :to="{name: 'Login'}" class="texto_navbar">Login</router-link></b-nav-item>
            <b-nav-item v-if="this.uid"><router-link  :to="{name: 'Agregando'}" class="texto_navbar">Agregar Usuario</router-link></b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'App',
  data() {
    return {
      uid: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.uid = user.uid;
        console.log('Hay usuario activo.');
        this.$router.push('/')
      } else {
        console.log('No hay usuarios registrados')
      }
    });
  },
}
</script>

<style lang="scss">
  .texto_navbar {
    color: white;
  }
</style>
