<template>
  <div class="home-container">
    <!-- Encabezado con la barra de navegación -->
    <header class="header">
      <nav class="navbar">
  <ul class="nav-left">
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="#recipes">Recetas</router-link></li>
    <li><router-link to="#about">Acerca de</router-link></li>
    <li><router-link to="#contact">Contacto</router-link></li>
    <li class="search">
      <input type="text" placeholder="Buscar recetas..." />
    </li>
  </ul>
  <ul class="nav-right">
    <li><router-link to="register">Registro</router-link></li>
    <li><router-link to="#login">Login</router-link></li>
  </ul>
</nav>

    </header>

    <!-- Mensaje CTA con imagen de fondo -->
    <section class="cta">
      <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
      <button @click="goToRegister">Regístrate Ahora</button>
    </section>

    <!-- Video -->
    <div class="video-container">
      <h3>Aprende a cocinar</h3>
      <video width="100%" height="auto" muted controls>
        <source src="videos/Recetas_faciles.mp4" type="video/mp4">
        Tu navegador no soporta la etiqueta de video.
      </video>
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
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    searchRecipes() {
      console.log('Buscando recetas...');
    }
  }
};
</script>

<style scoped>


html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  
}

.home-container {
  max-width: 100vw;
  min-height: 100vh;
  background-color: #000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para la barra de navegación */
  padding-top: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center; /* Alinear verticalmente */
}

.nav-left {
  justify-content: center; /* Centrar los elementos en la parte izquierda */
}

.nav-left li {
  margin: 0 5px; /* Espaciado entre los elementos */
}

.nav-right {
  margin-left: auto; /* Empujar la lista de la derecha hacia el final */
}

.navbar{
  display: flex; /* Cambiar a flex para la barra de navegación */
  justify-content: space-between; /* Distribuir espacio entre los elementos */
  align-items: center;

}
  
.navbar ul li {
  margin: 0 15px;
  
}

.navbar a {
  text-decoration: none;
  color: #ffffff;
}

.navbar :hover{
  text-decoration: none;
  color: #a80000;

}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 300px;
}



.cta {
  position: relative;
  min-height: 100vh;
  margin-top: 45px;
  background-image: url('https://img.freepik.com/foto-gratis/fondo-abstracto-borroso-cocina-moderna-mesa-espacio-exhibir-sus-productos_91908-1263.jpg?size=626&ext=jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cta h2 {
  color: #080808;
  font-size: 48px;
  margin-bottom: 20px;
}

.cta button {
  background-color: #0e0d0d;
  color: #f1f1f1;
  padding: 10px 20px;
  font-size: 20px;
}

.cta button:hover {
  color: #f1f1f1;
  padding: 10px 20px;
  font-size: 20px;
  background-color: #a80000;
  transition: background-color 0.3s;
  cursor: pointer;

}

.video-container {
  margin: 50px 0;
}

.video-container h3 {
  margin-bottom: 20px;
}

.footer {
  margin-top: 50px;
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
}
</style>