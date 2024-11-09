<template>
  <div class="home-container">
    <!-- Sección CTA con imagen de fondo y texto superpuesto -->
    <section class="cta">
      <div class="cta-content">
        <h1 class="glow">ProCocina</h1>
        <button class="glow-button" @click="showAboutUs">Ver más</button>
      </div>
    </section>

    <!-- Nueva sección "SOBRE NOSOTROS" con video como fondo -->
    <section class="about-section" ref="secondSection" :class="{ 'slide-in': showAnimation }">
      <div class="about-background">
        <video class="background-video" autoplay muted loop>
          <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4">
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div class="overlay"></div> <!-- Recuadro oscuro y transparente -->
        <div class="about-text">
          <h1 class="about-title">SOBRE NOSOTROS</h1>
          <p class="about-paragraph">
            En ProCocina, nos apasiona más que la cocina; creemos en la magia que ocurre al combinar ingredientes, sabores e historias. 
            Nuestra misión es inspirar a todos a explorar su creatividad culinaria, ya sea recreando clásicos o experimentando con recetas innovadoras. 
            Contamos con un equipo diverso de expertos y entusiastas de la gastronomía, que trabajan juntos para ofrecerte técnicas accesibles, sabores únicos y consejos prácticos para que tu experiencia en la cocina sea siempre memorable. 
            ¡Únete a nosotros y descubre un mundo de posibilidades culinarias, donde cada plato cuenta una historia!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnimation: false
    };
  },
  methods: {
    showAboutUs() {
      this.showAnimation = true;
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
  font-family: 'Poppins', sans-serif;
}

.home-container {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* Fondo negro para toda la página */
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
  overflow: hidden;
}

/* Primera imagen */
.cta:nth-child(1) {
  background-image: url('https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-peppers-1302126_1280.jpg');
}

/* Contenido superpuesto */
.cta-content {
  text-align: center;
  color: #fff;
  padding: 20px;
}

/* Clase para el resplandor alrededor del título */
.glow {
  font-size: 45px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(181, 5, 5, 0.8), 
               0 0 20px rgba(231, 247, 3, 0.712), 
               0 0 30px rgba(0, 0, 0, 0.4); 
}

/* Nueva sección "SOBRE NOSOTROS" */
.about-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra el contenido */
  padding: 20px;
  max-width: 100vw; /* Ocupa toda la vista de la pantalla */
  min-height: 100vh; /* Asegura que la sección tenga al menos el alto de la ventana */
  transform: translateX(-20px); /* Desplazamiento inicial desde la izquierda */
  opacity: 0; /* Opacidad inicial */
  transition: transform 0.5s ease-out, opacity 0.5s ease-out; /* Transiciones para la animación */
}

/* Fondo de la sección "SOBRE NOSOTROS" */
.about-background {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espacio entre texto e imagen */
  position: relative; /* Para posicionar el overlay */
  width: 100%; /* Ancho de la sección ajustado para ocupar toda la pantalla */
  height: 100vh; /* Asegura que la sección tenga el alto de la ventana */
}

/* Estilo para el video de fondo */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cubre todo el fondo */
  z-index: 0; /* Asegura que el video esté detrás del texto */
}

/* Estilo para el overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Cubre la mitad izquierda */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Color oscuro con transparencia */
  z-index: 1; /* Asegura que el overlay esté detrás del texto */
}

/* Clase para la animación de desplazamiento */
.slide-in {
  transform: translateX(0); /* Restablece el desplazamiento */
  opacity: 1; /* Cambia la opacidad a 1 */
}

/* Contenedor del texto */
.about-text {
  width: 50%; /* Ajusta el tamaño del texto */
  padding: 20px; /* Espaciado interno */
  position: relative; /* Para que el texto esté sobre el overlay */
  z-index: 2; /* Asegura que el texto esté encima del overlay */
}

/* Estilo del título "SOBRE NOSOTROS" */
.about-title {
  font-size: 48px; /* Tamaño del título aumentado */
  margin-bottom: 20px; /* Espaciado inferior */
  color: #fff; /* Color del texto en blanco */
  text-decoration: underline; /* Subrayado del título */
}

/* Estilo del párrafo */
.about-text p {
  font-size: 24px; /* Tamaño del texto aumentado */
  line-height: 1.5; /* Mejora el espaciado entre líneas */
  color: #fff; /* Color del texto en blanco */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Efecto de sombra en el texto */
}

/* Efectos de desvanecimiento suave */
.about-us {
  animation: fadeInUp 1.5s ease-in-out;
}

/* Keyframes para animación */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Títulos y texto */
.cta-content h1 {
  margin-bottom: 20px;
  font-size: 40px;
  color: #ffffff;
}

.cta-content p {
  font-size: 20px;
  max-width: 600px;
  margin-bottom: 30px;
}

/* Estilos del botón */
.glow-button {
  background-color: rgba(85, 83, 83, 0.256); 
  color: #fff;
  padding: 15px 30px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden; 
}

.glow-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-button:hover {
  background-color: rgba(255, 0, 0, 0.759); 
  border-color: #d62839;
}

.glow-button:hover:before {
  opacity: 1;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .cta-content h1 {
    font-size: 32px;
  }

  .cta-content p {
    font-size: 16px;
  }

  .cta-content button {
    padding: 10px 20px;
    font-size: 16px;
  }

  .about-title {
    font-size: 32px; /* Tamaño del título más pequeño en pantallas pequeñas */
  }

  .about-text p {
    font-size: 20px; /* Tamaño del texto más pequeño en pantallas pequeñas */
  }

  .about-text {
    width: 100%; /* Ajusta el tamaño del texto en pantallas pequeñas */
  }

  .about-image {
    width: 100%; /* Ajusta el tamaño de la imagen en pantallas pequeñas */
  }

  .about-image .image {
    width: 100%; /* La imagen ocupará todo el ancho del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
  }
}
</style>