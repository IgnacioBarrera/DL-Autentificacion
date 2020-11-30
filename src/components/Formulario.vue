<template>
  <div>
    <b-form class="container" @submit.prevent="login">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Ingrese contraseña:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.clave"
          type="password"
          required
          placeholder="Contraseña"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Formulario",
  data() {
    return {
      form: {
        email: "",
        clave: "",
      },
    };
  },
  methods: {
    login() {
      if (this.form.email && this.form.clave && this.form.clave.length >= 6) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.clave)
          .then((resp) => {
            console.log(resp.user.email);
          })
          .catch((error) => {
            if (error.code == "auth/wrong-password") {
              this.$notify.error({
                title: 'Error',
                message: `La contraseña ingresada es incorrecta.`
            });
            } else if (error.code == "auth/user-disabled") {
              this.$notify.error({
                title: 'Error',
                message: `El usuario se encuentra inhabilitado.`
            });
            } else if (error.code == "auth/user-not-found") {
              this.$notify.error({
                title: 'Error',
                message: `El usuario no corresponde.`
            });
            } else if (error.code == "auth/invalid-email") {
              this.$notify.error({
                title: 'Error',
                message: `El email ingresado es incorrecto.`
            });
            } else {
              this.$notify.error({
                title: 'Error',
                message: `Estamos presentando un error de sistema.`
            });
            }
          });
      } else {
        console.log("No se puede conectar");
      }
    },
  },
};
</script>

<style></style>
