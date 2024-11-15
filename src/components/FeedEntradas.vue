<template>
  <div class="feed-entradas">
    <div class="column left">
      <div class="carousel">
        <div class="carousel-images" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            @click="goToRecipes('entradas')"
            alt="Receta de entrada"
          />
        </div>
        <button class="carousel-control prev" @click="prevImage">❮</button>
        <button class="carousel-control next" @click="nextImage">❯</button>
      </div>
    </div>
    <div class="column right">
      <div class="intro-text">
        <h2>¿Te gustaría preparar alguna de estas deliciosas entradas, cierto?</h2>
        <button class="custom-button" @click="goToRecipes('entradas')">
          <span>Ver más</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/3/3_entradas_deliciosas_pero_saludables_que_puedes_darle_a_tus_invitados_si_tienes_una_reunion_en_casa2.jpg",
        "https://i.blogs.es/2d7201/1/1366_2000.jpg",
        "https://www.revistacredencial.com/sites/default/files/styles/760xauto-nota/public/imagenes/festival_gastro.jpg?itok=Tfo2eDFW",
        "https://www.revistapancaliente.co/wp-content/uploads/2024/09/Entradas_menu_para_restaurante.jpg"
      ],
      currentImageIndex: 0
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    goToRecipes(category) {
      const isAuthenticated = localStorage.getItem("user");
      if (isAuthenticated) {
        this.$router.push(`/recipes/${category}`);
      } else {
        this.$router.push("/login");
      }
    },
    autoSlide() {
      setInterval(() => {
        this.nextImage();
      }, 4000); // Cambia cada 4 segundos
    }
  },
  mounted() {
    this.autoSlide();
  }
};
</script>

<style scoped>
.feed-entradas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 100px; /* Ajuste para evitar que se oculte detrás de la barra de navegación */
}

.column {
  flex: 1;
  min-width: 300px;
  min-height: 400px; /* Ajuste para hacer las columnas más altas */
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b80000;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.intro-text {
  text-align: center;
}

.intro-text h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Estilo para el botón personalizado */
.custom-button {
  display: inline-block;
  background-color: white;
  color: #b30000;
  font-weight: bold;
  border: 2px solid #b30000;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #b30000;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.carousel {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 400px; /* Asegura que el carrusel tenga la misma altura que las columnas */
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-images img {
  min-width: 100%;
  cursor: pointer;
  height: 100%; /* Asegura que las imágenes ocupen toda la altura del carrusel */
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Responsividad */
@media (max-width: 768px) {
  .feed-entradas {
    flex-direction: column;
    align-items: center;
  }
  .column {
    min-height: auto;
  }
}
</style>
