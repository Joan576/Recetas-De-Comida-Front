<template>
  <div class="home-container">
    <!-- Mensaje CTA (Call to Action) con imagen de fondo -->
    <section class="cta">
      <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
      <!-- Botón que ejecuta el método goToRegister al hacer clic -->
      <button @click="goToRegister">Regístrate Ahora</button>
    </section>

    <!-- Contenedor para el video -->
    <div class="video-container">
      <h3 style="text-align: center;">Aprende a cocinar lo mejor, con los mejores c:</h3>
      <!-- Video que se reproduce automáticamente y en bucle -->
      <video width="100%" height="auto" muted autoplay loop>
        <source src="../../videos/videoplayback.mp4" type="video/mp4">
        <!-- Mensaje que se muestra si el navegador no soporta la etiqueta de video -->
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
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina el padding predeterminado */
  height: 100%; /* Altura del 100% para ocupar toda la ventana */
  font-family: Arial, sans-serif; /* Fuente predeterminada */
}

/* Estilos para el contenedor principal de la página */
.home-container {
  max-width: 100vw; /* Ancho máximo del 100% de la ventana */
  min-height: 100vh; /* Altura mínima del 100% de la ventana */
  background-color: #000; /* Fondo negro */
  color: #ffffff; /* Texto en blanco */
  display: flex; /* Utiliza flexbox para organizar el contenido */
  flex-direction: column; /* Disposición en columna */
  margin: 0; /* Sin márgenes */
  padding: 0; /* Sin padding */
  box-sizing: border-box; /* Incluye el padding y el borde en el tamaño total */
}

/* Estilos para la sección CTA */
.cta {
  position: relative; /* Posicionamiento relativo */
  min-height: 100vh; /* Altura mínima del 100% de la ventana */
  margin-top: 45px; /* Margen superior de 45px */
  background-image: url('https://img.freepik.com/foto-gratis/fondo-abstracto-borroso-cocina-moderna-mesa-espacio-exhibir-sus-productos_91908-1263.jpg?size=626&ext=jpg'); /* Imagen de fondo */
  background-size: cover; /* La imagen cubre todo el contenedor */
  background-position: center; /* Imagen centrada */
  display: flex; /* Utiliza flexbox para organizar el contenido */
  flex-direction: column; /* Disposición en columna */
  justify-content: center; /* Centra el contenido verticalmente */
  align-items: center; /* Centra el contenido horizontalmente */
  text-align: center; /* Alinea el texto en el centro */
}

/* Estilos para el encabezado de la sección CTA */
.cta h2 {
  color: #080808; /* Color del texto */
  font-size: 48px; /* Tamaño de la fuente */
  margin-bottom: 20px; /* Espacio debajo del encabezado */
}

/* Estilos para el botón en la sección CTA */
.cta button {
  background-color: #0e0d0d; /* Color de fondo del botón */
  color: #f1f1f1; /* Color del texto del botón */
  padding: 10px 20px; /* Espaciado interno del botón */
  font-size: 20px; /* Tamaño de la fuente del botón */
}

/* Efecto hover para el botón */
.cta button:hover {
  color: #f1f1f1; /* Color del texto en hover */
  background-color: #a80000; /* Color de fondo en hover */
  transition: background-color 0.3s; /* Transición suave del color de fondo */
  cursor: pointer; /* Cambia el cursor a puntero */
}

/* Estilos para el contenedor del video */
.video-container {
  margin: 20px; /* Margen alrededor del contenedor del video */
}

/* Estilos para el encabezado del video */
.video-container h3 {
  margin-bottom: 20px; /* Espacio debajo del encabezado */
}

/* Estilos para el pie de página */
.footer {
  margin-top: 50px; /* Margen superior del pie de página */
  padding: 10px; /* Espaciado interno del pie de página */
  background-color: #333; /* Color de fondo del pie de página */
  color: white; /* Color del texto del pie de página */
  text-align: center; /* Alinea el texto en el centro */
}
</style>
