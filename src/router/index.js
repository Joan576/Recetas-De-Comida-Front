import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import HomePage from '../views/LandingPage.vue';

const routes = [
  { path: '/', component: MainView, children: [
    { path: 'login', component: () => import('../components/LoginForm.vue') },
    { path: 'register', component: () => import('../components/RegisterForm.vue') },
    { path: 'acerca-de', component: () => import('../components/AboutPage.vue') },
    { path: 'recetas', component: () => import('../components/RecipePage.vue') },
    { path: 'recipes/entradas', component: () => import('../components/EntradasPage.vue') },
    { path: 'recipes/postres', component: () => import('../components/PostresPage.vue') },
    { path: 'recipes/bebidas', component: () => import('../components/BebidasPage.vue') },
    { path: 'recipes/platos-fuertes', component: () => import('../components/PlatosFuertesPage.vue') },
    { path: 'perfil', component: () => import('../components/UserProfile.vue') },
    { path: 'feed', component: () => import('../components/FeedPage.vue') },
    {path:'guardado', component: ()=> import('../components/GuardoPage.vue')},
    {path: '/', name: 'LandingPage', component: HomePage},
  ]}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
