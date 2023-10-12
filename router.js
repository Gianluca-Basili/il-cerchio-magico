import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/components/Home.vue';
import LaNostraEquipe from './src/components/LaNostreEquipe.vue';
import LeNostreAttività from './src/components/LeNostreAttività.vue';
import Contatti from './src/components/Contatti.vue'

// Crea un router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },           // Rotta per la homepage
    { path: '/LaNostreEquipe', component: LaNostraEquipe }, 
    { path: '/LeNostreAttivita', component: LeNostreAttività },
    { path: '/Contatti', component: Contatti } 
  ],
  // Aggiungi altre opzioni del router qui, se necessario
});


export default router;


