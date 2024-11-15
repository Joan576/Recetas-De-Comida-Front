<template>
  <div class="feed-bebidas">
    <div class="column left">
      <div class="intro-text">
        <h2>¿Te gustaría preparar alguna de estas deliciosas bebidas, cierto?</h2>
        <button class="view-now" @click="goToRecipes('bebidas')">Ver más</button>
      </div>
    </div>
    <div class="column right">
      <div class="carousel">
        <div class="carousel-images" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            @click="goToRecipes('bebidas')"
            alt="Receta de bebida"
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
        "https://coctelia.com/wp-content/uploads/2018/08/paloma.jpg",
        "https://th.bing.com/th/id/OIP.pDAoa-nsBUJ6KJAihu7W1AHaE8?rs=1&pid=ImgDetMain",
        "https://chefeel.com/chefgeneralfiles/2021/11/milky-cocktail-in-glass-with-pinapple-slice-and-cherry-scaled.jpg",
        "https://th.bing.com/th/id/OIP.H7nM8c9ifZNJLafOCupQNQHaE9?rs=1&pid=ImgDetMain"
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
.feed-bebidas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
 
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
  background-color: #b80000;
  color: white;
  padding: 20px;
  border-radius: 10px
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;;
}

.intro-text {
  text-align: center;
}

.intro-text h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.view-now {
  background-color: white;
  color: #b30000;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.carousel {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-images img {
  min-width: 100%;
  cursor: pointer;
  height: 200px;
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

</style>
