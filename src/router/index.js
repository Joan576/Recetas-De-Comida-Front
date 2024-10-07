import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterForm from '../components/registerForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Componente que se mostrará en la raíz
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm, // Componente de registro
  },
  // Agrega más rutas aquí si es necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

