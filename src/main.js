import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'; // Assicurati che il percorso sia corretto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App);
app.use(router);

app.mount('#app');
