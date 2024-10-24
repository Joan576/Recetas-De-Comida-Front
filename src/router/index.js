import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginForm from '../components/loginForm.vue';
import RegisterForm from '../components/registerForm.vue';
import AcercaDe from '../components/acerca_de.vue'; // Importa el componente
import RecipePage from '@/components/RecipePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/acerca-de', component: AcercaDe }, // Agrega la ruta para Acerca de
  { path: '/recetas', component: RecipePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // Siempre que vayas a una nueva ruta, vuelve al inicio
  },
});

export default router;
