<template>
  <div class="home-container">
    <!-- Mensaje CTA (Call to Action) con imagen de fondo -->
    <section class="cta">
      <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
      <button @click="goToRegister">Regístrate Ahora</button>
    </section>

    

    <!-- Contenedor para el video -->
    <div class="video-container">
      <h3 style="text-align: center;">Aprende a cocinar lo mejor, con los mejores c:</h3>
      <video width="100%" height="auto" muted autoplay loop>
        <source src="../../videos/videoplayback.mp4" type="video/mp4">
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Método que redirige a la página de registro
    goToRegister() {
      this.$router.push('/register'); // Cambia la ruta a '/register'
    },
    // Método que se puede usar para buscar recetas (actualmente solo imprime un mensaje)
    searchRecipes() {
      console.log('Buscando recetas...'); // Mensaje en la consola
    }
  }
};
</script>

<style scoped>
/* Estilos generales para html y body */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

/* Estilos para el contenedor principal de la página */
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

/* Estilos para la sección CTA */
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
  background-color: #a80000;
  transition: background-color 0.3s;
  cursor: pointer;
}

/* Estilos para la sección de recetas */
.recipes-section {
  padding: 40px 20px;
  background-color: #000; /* Fondo negro */
  text-align: center;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Ajusta a 4 columnas */
  gap: 20px;
  justify-content: center; /* Centrar las tarjetas en la sección */
  max-width: 1200px; /* Limitar el ancho máximo del grid */
  margin: 0 auto; /* Centrar el grid en la página */
}

/* Estilos para el contenedor del video */
.video-container {
  margin: 20px;
}

.video-container h3 {
  margin-bottom: 20px;
}
</style>
