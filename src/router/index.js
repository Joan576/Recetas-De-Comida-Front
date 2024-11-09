import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/LandingPage.vue';
import RegisterForm from '../views/RegisterView.vue';
import LoginForm from '../views/LoginView.vue';
import RecipePage from '../views/RecetasView.vue';
import EntradasPage from '../views/EntradasView.vue';
import PostresPage from '../views/PostresView.vue';
import BebidasPage from '../views/BebidasView.vue';
import PlatosFuertesPage from '../views/PlatosFuertesView.vue';
import UserProfile from '../views/PerfilView.vue';
import FeedPage from '../views/FeedView.vue';
import GuardoPage from '../views/GuardadoView.vue';

const routes = [
  { path: '/login', name: 'LoginView', component: LoginForm },
  { path: '/register', name: 'RegisterView', component: RegisterForm },
  { path: '/acerca-de', component: () => import('../components/AboutPage.vue') },
  { path: '/recetas', name: 'RecetasView', component: RecipePage },
  { path: '/recipes/entradas', name: 'EntradasView', component: EntradasPage },
  { path: '/recipes/postres', name: 'PostresView', component: PostresPage },
  { path: '/recipes/bebidas', name: 'BebidasView', component: BebidasPage },
  { path: '/recipes/platos_fuertes', name: 'PlatosFuertesView', component: PlatosFuertesPage },
  { path: '/perfil', name: 'PerfilView', component: UserProfile },
  { path: '/feed', name: 'FeedView', component: FeedPage },
  { path: '/guardado', name: 'GuardoView', component: GuardoPage },
  { path: '/', name: 'LandingPage', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
