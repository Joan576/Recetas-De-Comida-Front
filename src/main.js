// /main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador que creaste

const app = createApp(App);
app.use(router); // Usa el enrutador
app.mount('#app'); // Monta la aplicación en el elemento con id="app"