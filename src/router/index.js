import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // Asegúrate de que la ruta y el nombre sean correctos
import RegisterPage from '../views/RegisterPage.vue'; // Asegúrate de que la ruta y el nombre sean correctos

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
