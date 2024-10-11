import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginForm from '../components/loginForm.vue';
import RegisterForm from '../components/registerForm.vue';
import AcercaDe from '../components/acerca_de.vue'; // Importa el componente

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/acerca-de', component: AcercaDe }, // Agrega la ruta para Acerca de
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
