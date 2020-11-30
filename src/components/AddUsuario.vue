<template>
  <div>
    <b-form class="container" @submit.prevent="agregar">

      <b-form-group id="input-group-1" label="Ingrese su nombre" label-for="input-1">
        <b-form-input id="input-1" v-model="form.nombre" type="text" required placeholder="Nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingrese su apellido" label-for="input-2">
        <b-form-input id="input-2" v-model="form.apellido" type="text" required placeholder="Apellido"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Ingrese su edad" label-for="input-3">
        <b-form-input id="input-3" v-model="form.edad" type="number" required placeholder="Edad"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Selecciona el sexo que te identifica" label-for="input-4">
        <b-form-select id="input-4" v-model="form.sexo" :options="options"></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Agregar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

    </b-form>
  </div>
</template>

<script>
export default {
    name: 'AddUsuario',
    data() {
      return {
        form: {
          nombre: '',
          apellido: '',
          edad: 0,
          sexo: "Masculino"
        },
        options: [
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Femenino', text: 'Femenino' },
        ]
      }
    },
    methods: {
      agregar(){
        if (this.form.nombre && this.form.nombre.length > 2 && this.form.apellido && this.form.apellido.length > 2 && this.form.edad  && this.form.edad.length > 0 && this.form.sexo) {
          this.$store.dispatch('addUsuario', this.form );
          this.$router.push('/');
        } else {
          console.log('ajams')
        }
      }
    },
}
</script>

<style>

</style>