<template>
  <div class="container">
    <h1>USUARIOS</h1>
    <ListadoUsuarios/>
    <b-button variant="danger" @click="salir">Salir</b-button>
  </div>
</template>

<script>
import firebase from "firebase";
import ListadoUsuarios from '../components/ListadoUsuarios';

export default {
  name: 'Home',
  components: {
    ListadoUsuarios
  },
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
