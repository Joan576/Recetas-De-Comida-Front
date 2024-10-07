import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterForm from '../components/registerForm.vue';
import LoginForm from '../components/loginForm.vue'; // Importa el componente de Login

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
  {
    path: '/login',
    name: 'Login',
    component: LoginForm, // Componente de Login
  },
  // Agrega más rutas aquí si es necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
