<template>
  <div class="home-container">
    <h1 class="cta-title" style="margin-top: 90px;">Bienvenido a ProCocina</h1>

    <div class="video-container">
      <div class="video-overlay">
        <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
        <p>Explora una variedad de recetas creadas por chefs profesionales. Encuentra platos para cada ocasión y mejora tus habilidades culinarias.</p>
        <button @click="goToRegister">Regístrate Ahora</button>
      </div>
      <video width="100%" height="auto" muted autoplay loop>
        <source src="../../videos/videoplayback.mp4" type="video/mp4">
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>

    <section class="cta">
      <div class="cta-content">
        <div class="cta-card">
          <h2>Mira todas nuestras recetas</h2>
          <p>Accede a nuestra galería de recetas y sorprende a todos con tus habilidades culinarias.</p>
          <button @click="goToRecipes">Explorar Recetas</button>
        </div>
        <div class="recipe-images">
          <img loading="lazy" width="300" height="200" src="https://images.pexels.com/photos/4057736/pexels-photo-4057736.jpeg" alt="Receta 1">
          <img loading="lazy" width="300" height="200" src="https://images.pexels.com/photos/19503814/pexels-photo-19503814/free-photo-of-plato-almuerzo-comida-frito.jpeg" alt="Receta 2">
          <img loading="lazy" width="300" height="200" src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg" alt="Receta 3">
          <img loading="lazy" width="300" height="200" src="https://images.pexels.com/photos/1459338/pexels-photo-1459338.jpeg" alt="Receta 4">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToRecipes() {
      this.$router.push('/recetas');
    }
  }
};
</script>

<style scoped>
/* Estilos generales */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #000;
}

/* Contenedor principal */
.home-container {
  max-width: 100vw;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cta {
  position: relative;
  min-height: 100vh;
  background-image: url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 0px;
  z-index: 1;
  padding: 150px;
}

.cta-title {
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Sombra negra suave */
  margin-bottom: 20px; /* Ajusta este margen para moverlo hacia el div */
  position: absolute; /* Posicionamiento absoluto */
  top: 20%; /* Ajusta el porcentaje para moverlo hacia abajo */
  left: 50%;
  transform: translate(-50%, -50%); /* Centra el título horizontalmente */
  z-index: 1; /* Asegura que el título esté por encima del video */
}

/* Agregar una capa oscura sobre la imagen de fondo */
.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Ajusta la opacidad con el último valor */
  z-index: -1; /* Envía la capa detrás del contenido */
}

/* Estilos del título */
.cta-title {
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Sombra negra suave */
  margin-bottom: 30px;
  position: absolute; /* Posiciona el título absolutamente */
  top: 20px; /* Ajusta la distancia desde la parte superior */
  left: 50%; /* Centra horizontalmente */
  transform: translateX(-50%); /* Alineación central */
  z-index: 1; /* Asegura que el título esté por encima del video */
}

/* Contenedor para la sección CTA con receta a la izquierda y las imágenes a la derecha */
.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilos del cta-card para mantenerlo a la izquierda */
.cta-card {
  background-color: rgba(0, 0, 0, 0.6); /* Fondo oscuro semitransparente */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
  max-width: 45%; /* Limita el ancho al 45% del contenedor */
  text-align: left;
  z-index: 1;
}

.cta-card h2 {
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 20px;
}

.cta-card p {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 30px;
}

.cta-card button {
  background-color: #a80000;
  color: #fff;
  padding: 12px 25px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-card button:hover {
  background-color: #800000;
  transition: background-color 0.3s;
}

/* Contenedor para las imágenes de recetas */
.recipe-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px; /* Espacio entre las imágenes */
  max-width: 45%; /* Ajusta según el diseño de tu página */
  margin: 0 auto; /* Centra el contenedor */
}

.recipe-images img {
  width: calc(50% - 10px); /* Hace que cada imagen ocupe el 50% menos el espacio entre columnas */
  height: auto; /* Mantén la proporción de la imagen */
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
  max-height: 200px; /* Limita la altura máxima */
  object-fit: cover; /* Asegura que la imagen se recorte si es necesario */
  box-shadow:  5px 5px 5px rgba(0, 0, 0, 0.5);
}

/* Contenedor del video */
.video-container {
  width: 100%;
  height: 100vh; /* Altura completa del viewport */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  padding-top: 70px;
}

/* Tarjeta sobre el video */
.video-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6); /* Fondo oscuro semitransparente */
  color: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  z-index: 1;
  max-width: 600px;
}

.video-overlay h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.video-overlay p {
  font-size: 18px;
  margin-bottom: 20px;
}

.video-overlay button {
  background-color: #a80000;
  color: #fff;
  padding: 12px 25px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.video-overlay button:hover {
  background-color: #800000;
  transition: background-color 0.3s;
}

/* Estilos para el video */
video {
  width: 100%;
  height: auto;
  object-fit: cover;
}

h2, p {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Sombra negra suave */
}
</style>
