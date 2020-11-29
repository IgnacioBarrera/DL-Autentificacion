import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from "firebase";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var usuario = firebase.auth().currentUser;
  
  let registroRequerido = to.matched.some(ruta => ruta.meta.login)
  console.log(registroRequerido);

  if (registroRequerido && !usuario) {
      next('/login');
  } else {
    next(); 
  }
})

export default router

