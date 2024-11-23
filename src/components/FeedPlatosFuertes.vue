<template>
  <div class="feed-entradas">
    <hr>
    <div class="column left">
      <div class="intro-text">
        <h2>Estamos seguros que estos platos fuertes te harán agua la boca ¿qué esperas para prepararlos?</h2>
        <button class="custom-button" @click="goToRecipes('platos-fuertes')">
          <span>Ver más</span>
        </button>
      </div>
    </div>
    <div class="column right">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://imagenes.heraldo.es/files/image_1920_1080/uploads/imagenes/2018/09/18/_maduro_1bd0f342.jpg",
        "https://i0.wp.com/tuliorecomienda.com/wp-content/uploads/2021/01/PHOTO-2021-01-23-11-39-15-2.jpg?w=1024&ssl=1",
        "https://triguisar.com.co/wp-content/uploads/2019/04/tortas-de-coliflor1.jpg",
        "https://cdn7.kiwilimon.com/clasificacion/3677/3677.jpg",
        "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/LDRLW34JWNAPHDQ6I7KOOUJVKI.jpg",
        "https://mojo.generalmills.com/api/public/content/KIVwKMkmX0mcxyYnGcQSyA_gmi_hi_res_jpeg.jpeg?v=25af9e9b&t=16e3ce250f244648bef28c5949fb99ff"
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
  margin-top: 75px; /* Ajuste para evitar que se oculte detrás de la barra de navegación */
}

.column {
  flex: 1;
  min-width: 300px;
  min-height: 400px; /* Ajuste para hacer las columnas más altas */
  max-height: 400px;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b80000;
  color: white;
  padding: 150px;
  border-radius: 10px;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
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
  max-height: 400px;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-images img {
  min-width: 100%;
  max-width: 100%; /* Asegura que las imágenes no sean más anchas que el contenedor */
  height: 100%; /* Asegura que las imágenes ocupen toda la altura del carrusel */
  object-fit: cover; /* Asegura que las imágenes se ajusten sin distorsión */
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
