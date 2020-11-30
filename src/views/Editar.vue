<template>
  <div>
    <b-form class="container mt-4" @submit.prevent="actualizando">
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

      <b-button type="submit" variant="primary" class="mr-2">Actualizar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Editar',
    data() {
      return {
        form: {
          nombre: '',
          apellido: '',
          edad: '',
          sexo: "Masculino",
          id: ''
        },
        options: [
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Femenino', text: 'Femenino' },
        ]
      }
    },
    created() {
        let info = {};
        info = this.$store.getters.mostrandoUsuarios.find(resp => resp.id === this.$route.params.id)
        if (info) {
            this.form.nombre = info.nombre;
            this.form.apellido = info.apellido;
            this.form.edad = info.edad;
            this.form.sexo = info.sexo;
            this.form.id = info.id;
        } else {
            this.$message('Usuario no existe... retornando.');
            setTimeout(()=>{
                this.$router.push('/usuarios');
            },1000);
        }
    },
    methods: {
        actualizando(){
            if (this.form.nombre && this.form.nombre.length > 2 && this.form.apellido && this.form.apellido.length > 2 && this.form.edad  && this.form.edad.length > 0 && this.form.sexo) {
                let datos = {
                    nombre: this.form.nombre,
                    apellido: this.form.apellido,
                    edad: parseInt(this.form.edad),
                    sexo: this.form.sexo,
                    id: this.form.id,
                }
                this.$store.dispatch('actualizandoUsuario',datos);
            } else {
                console.log('No se puede actualizar');
            }
        }
    }
}
</script>

<style>

</style>