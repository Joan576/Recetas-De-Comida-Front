// /router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';  // Asegúrate de que esta ruta sea correcta
import RegisterForm from '../components/registerForm.vue'; // Ruta del formulario de registro

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Esta es la ruta principal que se mostrará primero
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,  // Ruta para el formulario de registro
  },
  // Puedes agregar más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
