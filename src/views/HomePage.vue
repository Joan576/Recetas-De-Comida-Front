<template>
  <div class="home-container">
    <!-- Encabezado con la barra de navegación -->
    <header class="header">
      <nav class="navbar">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#recipes">Recetas</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li class="search">
            <input type="text" placeholder="Buscar recetas..." />
            <button @click="searchRecipes"><i class="fas fa-search"></i></button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Mensaje CTA con imagen de fondo -->
    <section class="cta">
      <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
      <button @click="registerUser">Regístrate Ahora</button>
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
    registerUser() {
      console.log('Función de registro (sin formulario)');
      // Lógica adicional para registrar al usuario si es necesario
    },
    searchRecipes() {
      // Lógica para buscar recetas
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
  max-width: 100vw; /* Ocupará todo el ancho de la ventana */
  min-height: 100vh; /* Mínimo el alto de la ventana */
  background-color: #000; /* Fondo negro */
  color: #ffffff; /* Texto blanco */
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%; /* Hacer que el encabezado ocupe todo el ancho */
  background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro para la barra de navegación */
  color: #ffffff; /* Color del texto */
  padding: 10px 20px; /* Espaciado */
  position: fixed; /* Fijar en la parte superior */
  top: 0; /* Top a 0 */
  z-index: 1000; /* Para que se muestre sobre otros elementos */
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center; /* Centrar el contenido horizontalmente */
}

.navbar ul li {
  margin: 0 15px;
}

.navbar a {
  text-decoration: none;
  color: #ffffff; /* Color de texto del menú */
}

.search {
  display: flex;
  align-items: center; /* Alinear verticalmente */
}

.search input {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.search button {
  background-color: #f5f5f5; /* Color del botón de búsqueda */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.cta {
  position: relative;
  min-height: 100vh; /* Altura mínima para la sección CTA */
  margin-top: 70px; /* Para compensar la altura de la barra de navegación fija */
  background-image: url('https://img.freepik.com/foto-gratis/fondo-abstracto-borroso-cocina-moderna-mesa-espacio-exhibir-sus-productos_91908-1263.jpg?size=626&ext=jpg'); /* Cambia la URL por la imagen de fondo deseada */
  background-size: cover; /* Cubrir todo el área */
  background-position: center; /* Centrar la imagen */
  display: flex; /* Para centrar contenido */
  flex-direction: column; /* Estructura vertical */
  justify-content: center; /* Centrar verticalmente */
  align-items: center; /* Centrar horizontalmente */
  text-align: center; /* Centrar el texto */
}

.cta h2 {
  color: #080808; /* Color de texto CTA que contrasta bien */
  font-size: 48px; /* Tamaño de texto más grande */
  margin-bottom: 20px; /* Espacio entre el título y el botón */
}

.cta button {
  background-color: #0e0d0d; /* Color del botón */
  color: #f1f1f1;
  padding: 10px 20px;
  font-size: 20px; /* Aumentar el tamaño del texto del botón */
}

.featured-image {
  margin: 50px 0; /* Espacio considerable entre la CTA y la imagen destacada */
}

.featured-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.video-container {
  margin: 50px 0; /* Espacio considerable antes de la sección de video */
}

.video-container h3 {
  margin-bottom: 20px; /* Espacio entre el título y el video */
}

.footer {
  margin-top: 50px; /* Espacio antes del pie de página */
  padding: 10px;
  background-color: #333; /* Color de fondo del pie de página */
  color: white;
  text-align: center; /* Centrar el texto del pie de página */
}
</style>
