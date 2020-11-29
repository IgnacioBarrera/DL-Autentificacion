<template>
  <div class="container">
    <h1>HOME</h1>
    <b-button variant="danger" @click="salir">Salir</b-button>
  </div>
</template>

<script>
import firebase from "firebase";


export default {
  name: 'Home',
  methods: {
    salir(){
      firebase.auth().signOut().then(() => {
        console.log('signOut ocurrio correctamente');
        this.$router.push("/login");
        }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>
