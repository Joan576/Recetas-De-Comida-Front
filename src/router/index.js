import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/LandingPage.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import RecipePage from '@/components/RecipePage.vue';
import EntradasPage from '@/components/EntradasPage.vue';
import PostresPage from '@/components/PostresPage.vue';
import BebidasPage from '@/components/BebidasPage.vue';
import PlatosFuertesPage from '@/components/PlatosFuertesPage.vue';
import UserProfile from '@/components/UserProfile.vue';
import FeedPage from '@/components/FeedPage.vue';
import GuardoPage from '@/components/GuardoPage.vue';

const routes = [
  { path: '/login', name: 'LoginView', component: LoginForm },
  { path: '/register', name: 'RegisterView', component: RegisterForm },
  { path: '/acerca-de', component: () => import('../components/AboutPage.vue') },
  { path: '/recetas', name: 'RecetasView', component: RecipePage },
  { path: '/reciper/entradas', name: 'EntradasView', component: EntradasPage },
  { path: '/reciper/postres', name: 'PostresView', component: PostresPage },
  { path: '/reciper/bebidas', name: 'BebidasView', component: BebidasPage },
  { path: '/reciper/platos_fuertes', name: 'PlatosFuertesView', component: PlatosFuertesPage },
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
