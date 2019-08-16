import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Competencias from './components/Competencias.vue'
import Formacao from './components/Formacao.vue'
import Idiomas from './components/Idiomas.vue'
import Habilidades from './components/Habilidades.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/competencias',
        name: 'competencias',
        component: Competencias
      },
      {
        path: '/formacao',
        name: 'formacao',
        component: Formacao
      },
      {
        path: '/idiomas',
        name: 'idiomas',
        component: Idiomas
      },
      {
        path: '/habilidades',
        name: 'habilidades',
        component: Habilidades
      }
    ]})
  