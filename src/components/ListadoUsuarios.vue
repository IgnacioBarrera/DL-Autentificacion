<template>
  <div class="container">
    <h1>ListadoUsuarios</h1>
    <div>
      <el-table :data="datoUsuarios" style="width: 100%">
        <el-table-column label="Fecha" width="220">
          <template slot-scope="scope">
            <i class="el-icon-user-solid"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Nombre" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>Name: {{ scope.row.nombre }}</p>
              <p>Apellido: {{ scope.row.apellido }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.nombre }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Apellido" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>Name: {{ scope.row.nombre }}</p>
              <p>Apellido: {{ scope.row.apellido }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.apellido }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="edad" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>Name: {{ scope.row.nombre }}</p>
              <p>Apellido: {{ scope.row.apellido }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.edad }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operaciones">
          <template slot-scope="scope">
            <el-button size="mini" @click="editarUsuario(scope.row.id)">Editar</el-button>
            <el-button size="mini" type="danger" @click="eliminarUsuario(scope.row.id)">Eliminar</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListadoUsuarios",
  mounted() {
    this.$store.dispatch("traigoDatos");
  },
  computed: {
    datoUsuarios() {
      return this.$store.getters.mostrandoUsuarios;
    },
  },
  methods: {
      eliminarUsuario(id){
          this.$confirm('¿Estás seguro que deseas eliminar al usuario seleccionado?', 'Cuidado', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Usuario Eliminado.'
          });
          this.$store.dispatch('eliminarUsuario',id);
        }).catch(() => {
          console.log('Se produjo un error al eliminar al usuario.')
        });
      },
      editarUsuario(id){
        this.$router.push({name: 'Editar', params: {id: id}});
      }
  },
};
</script>

<style>
</style>
