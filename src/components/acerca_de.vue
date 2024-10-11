<template>
  <div class="home-container">
    <!-- Sección CTA con imagen de fondo y texto superpuesto -->
    <section class="cta">
      <!-- Contenedor del contenido -->
      <div class="cta-content">
        <h1>COCPROG</h1>
        <!-- Botón que al hacer clic desplaza la vista a la segunda imagen -->
        <button @click="scrollToSecondSection">Ver más</button>
      </div>
    </section>

    <!-- Nueva sección con otra imagen y texto -->
    <section class="cta" ref="secondSection">
      <div class="cta-content left-align">
        <h1>SOBRE NOSOTROS</h1>
        <p>
          En CocProg, creemos que la cocina es más que una 
          actividad diaria; es una forma de compartir amor, 
          cultura y creatividad. 
          Nuestro equipo está compuesto por apasionados de 
          la gastronomía que buscan inspirarte a descubrir 
          nuevas recetas, técnicas y sabores que puedas recrear
          fácilmente en casa.
        </p>
        <!-- Botón eliminado en la segunda sección -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    // Método que desplaza suavemente la vista a la segunda sección
    scrollToSecondSection() {
      this.$refs.secondSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
};
</script>

<style scoped>
/* Estilos generales */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

.home-container {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
}

/* Sección CTA con imagen de fondo */
.cta {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Primera imagen */
.cta:nth-child(1) {
  background-image: url('https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-peppers-1302126_1280.jpg');
}

/* Segunda imagen */
.cta:nth-child(2) {
  background-image: url('https://production-data.worldofmouth.app/images/3507475e-2ea9-4ace-a5fe-3abf543b7099-1080x1080.jpg');
}

/* Contenido superpuesto */
.cta-content {
  text-align: center; /* Texto centrado para la primera sección */
  color: #fff;
  padding: 20px; /* Ajustamos el padding */
  margin: 0; /* Eliminamos el margen para ajustar a la izquierda */
}

/* Alineación específica para el contenido de la segunda sección */
.left-align {
  text-align: left; /* Alineación a la izquierda */
  width: 100%; /* Aseguramos que el ancho ocupe todo el contenedor */
  padding: 0; /* Eliminamos el padding */
  position: absolute; /* Posicionamos absolutamente */
  bottom: 20%; /* Ajusta la distancia desde la parte inferior */
  left: 1%; /* Ajusta la distancia desde la izquierda */
}

/* Títulos y texto */
.cta-content h1 {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 20px;
  max-width: 600px;
  margin-bottom: 30px;
}

.cta-content button {
  background-color: #555353;
  color: #fff;
  padding: 15px 30px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-content button:hover {
  background-color: #cc3232;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .cta-content h1 {
    font-size: 40px;
  }

  .cta-content p {
    font-size: 16px;
  }

  .cta-content button {
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>
