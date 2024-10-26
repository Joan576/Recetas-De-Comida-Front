import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginForm from '../components/loginForm.vue';
import RegisterForm from '../components/registerForm.vue';
import AcercaDe from '../components/acerca_de.vue';
import RecipePage from '@/components/RecipePage.vue';
import EntradasPage from '@/components/EntradasPage.vue';
import PostresPage from '@/components/PostresPage.vue';
import BebidasPage from '@/components/BebidasPage.vue';
import PlatosFuertesPage from '@/components/PlatosFuertesPage.vue'; // Importa el componente de Platos Fuertes

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/acerca-de', component: AcercaDe },
  { path: '/recetas', component: RecipePage },
  { path: '/recipes/entradas', component: EntradasPage },
  { path: '/recipes/postres', component: PostresPage },
  { path: '/recipes/bebidas', component: BebidasPage },
  { path: '/recipes/platos-fuertes', component: PlatosFuertesPage }, // Nueva ruta para Platos Fuertes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
