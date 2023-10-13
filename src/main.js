import { createApp } from 'vue';
import App from './App.vue';
import router from '../router'; // Assicurati che il percorso al tuo router sia corretto
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa gli stili di Font Awesome

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';

library.add(fas,); // Aggiungi sia le icone "solid" che le icone "light"

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
