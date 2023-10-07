import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/components/Home.vue';
import Contatti from './src/components/Contatti.vue';
import ChiSiamo from './src/components/ChiSiamo.vue';

// Crea un router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },           // Rotta per la homepage
    { path: '/contatti', component: Contatti }, // Rotta per la pagina Contatti
    { path: '/chi-siamo', component: ChiSiamo } // Rotta per la pagina Chi Siamo
  ],
  // Aggiungi altre opzioni del router qui, se necessario
});

export default router;
