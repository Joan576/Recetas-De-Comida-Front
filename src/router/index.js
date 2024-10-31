import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const routes = [
  { path: '/', component: MainView, children: [
    { path: '', component: () => import('../components/HomePage.vue') },
    { path: 'login', component: () => import('../components/loginForm.vue') },
    { path: 'register', component: () => import('../components/registerForm.vue') },
    { path: 'acerca-de', component: () => import('../components/acerca_de.vue') },
    { path: 'recetas', component: () => import('../components/RecipePage.vue') },
    { path: 'recipes/entradas', component: () => import('../components/EntradasPage.vue') },
    { path: 'recipes/postres', component: () => import('../components/PostresPage.vue') },
    { path: 'recipes/bebidas', component: () => import('../components/BebidasPage.vue') },
    { path: 'recipes/platos-fuertes', component: () => import('../components/PlatosFuertesPage.vue') }
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
