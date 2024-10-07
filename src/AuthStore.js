// src/AuthStore.js
import { ref } from 'vue';

const isLoggedIn = ref(false);
const username = ref('');

const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en localStorage
    isLoggedIn.value = true; // Cambia el estado a logueado
    username.value = user.username; // Establecer el nombre de usuario
  };

const logout = () => {
  localStorage.removeItem('user');
  isLoggedIn.value = false;
  username.value = '';
};

const checkLoginStatus = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    isLoggedIn.value = true;
    username.value = user.username;
  }
};

export { isLoggedIn, username, login, logout, checkLoginStatus };
