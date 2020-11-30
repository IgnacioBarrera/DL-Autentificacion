import Vue from 'vue';
import Vuex from 'vuex';
import {db} from "../main";
import router from '../router/router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    mostrandoUsuarios(state){
      return state.usuarios;
    }
  },
  mutations: {
    mutandoUsusarios(state, arreglo){
      state.usuarios = arreglo;
    }
  },
  actions: {
    traigoDatos({commit}){
      db.collection('usuarios').onSnapshot(resp =>{
          let arreglo = [];
            resp.forEach(elemento => {
                arreglo.push({
                  id: elemento.id,
                  nombre: elemento.data().nombre,
                  apellido: elemento.data().apellido,
                  edad: elemento.data().edad,
                  sexo: elemento.data().sexo,
                });
            });
          commit('mutandoUsusarios',arreglo);
        });
    },
    addUsuario(context, data){
      db.collection('usuarios').add({
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,
        sexo: data.sexo,
      }).then(resp =>{
        console.log(resp);
      })
    },
    eliminarUsuario(context,id){
      console.log(id);
      db.collection('usuarios').doc(id).delete().then(resp =>{
        console.log(resp);
        console.log('Se elimino el usuario.');
      }).catch(error => {
        console.log(error);
        console.log('Oops... error al eliminar.');
      })
    },
    actualizandoUsuario(context,datos){
      db.collection('usuarios').doc(datos.id).update({
        nombre: datos.nombre,
        apellido: datos.apellido,
        edad: datos.edad,
        sexo: datos.sexo,
      }).then(() =>{
        console.log('Actualizando');
        setTimeout(()=>{
          router.replace('/');
        },1000);
      })
    }
  },
})
