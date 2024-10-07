<!-- layouts/MainLayout.vue -->
<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <ul class="nav-left">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/recetas">Recetas</router-link></li>
          <li><router-link to="/acerca-de">Acerca de</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
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
  </div>
  <!-- Información de contacto -->
  <footer class="footer">
    <h3>Información de Contacto</h3>
    <p>
      Si tienes alguna pregunta o comentario, no dudes en contactarnos a través del
      correo electrónico: <strong>progcoc@gmail.com</strong> o llámanos al
      <strong>+57 3212184888</strong>. Estamos aquí para ayudarte a descubrir las
      mejores recetas.
    </p>
    <p>&copy; 2024 Cocina Recetas. Todos los derechos reservados.</p>
  </footer>
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
.header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para la barra de navegación */
}

.navbar {
  display: flex; /* Cambiar a flex para la barra de navegación */
  justify-content: space-between; /* Distribuir espacio entre los elementos */
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center; /* Alinear verticalmente */
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
  background-color: #e63946; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar el cursor al pasar el mouse */
  font-size: 16px; /* Tamaño de fuente */
  transition: background-color 0.3s, transform 0.2s; /* Transiciones suaves */
}

.logout-button:hover {
  background-color: #d62839; /* Color al pasar el mouse */
  transform: scale(1.05); /* Aumentar ligeramente el tamaño */
}

.logout-button:focus {
  outline: none; /* Sin borde al enfocar */
}

.footer {
  margin-top: 0;
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
}

</style>
