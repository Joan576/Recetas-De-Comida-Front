<template>
  <div class="home-container">
    <!-- Mensaje CTA con imagen de fondo -->
    <section class="cta">
      <h2>¡Descubre las mejores recetas y cocina como un chef!</h2>
      <button @click="goToRegister">Regístrate Ahora</button>
    </section>

    <!-- Video -->
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

.video-container {
  margin: 20px;
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
