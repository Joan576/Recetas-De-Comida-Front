<template>
  <div class="layout-container">
    <header class="header">
      <nav class="navbar">
        <ul class="nav-left">
          <p style="padding-right: 10px; padding-left: 10px;">ProCocina</p>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/recetas">Recetas</router-link></li>
          <li><router-link to="/acerca-de">Acerca de</router-link></li>
        </ul>
        <ul class="nav-right">
          <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
          <li v-if="isLoggedIn">Bienvenido, {{ username }}</li>
          <li v-if="isLoggedIn"><button @click="handleLogout" class="logout-button">Logout</button></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
    
    <footer class="footer">
      <h3>Información de Contacto</h3>
      <p>
        Si tienes alguna pregunta o comentario, no dudes en contactarnos a través del
        correo electrónico: <strong>prococina@gmail.com</strong> o llámanos al
        <strong>+57 321 2184888</strong>.
      </p>
      <p>&copy; 2024 Cocina Recetas. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { isLoggedIn, username, checkLoginStatus, logout as logoutUser } from '../AuthStore';

// Verificar el estado de inicio de sesión al cargar el componente
onMounted(() => {
  checkLoginStatus();
});

const handleLogout = () => {
  logoutUser(); // Llamar a la función de logout
};
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana */
}

.header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

.nav-left li,
.nav-right li {
  margin: 0 15px;
}

.navbar a {
  text-decoration: none;
  color: #ffffff;
}

.navbar a:hover {
  text-decoration: none;
  color: #a80000;
}

.logout-button {
  padding: 3px 5px;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
}

.logout-button:hover {
  background-color: #d62839;
  transform: scale(1.05);
}

.logout-button:focus {
  outline: none;
}

li {
  list-style: none;
}

.footer {
  margin-top: auto; /* Asegura que el footer esté siempre en la parte inferior */
  padding: 10px;
  background-color: #000000;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 1;
}
</style>
