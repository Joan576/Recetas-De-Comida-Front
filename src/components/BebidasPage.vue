<template>
  <div class="bebidas-page" style="margin-bottom: 21px;">
    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="https://videos.pexels.com/video-files/854128/854128-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Bebidas</h1>

    <!-- Contenedor de las recetas -->
    <div class="recipes-container">
      <div
        class="recipe-card"
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="selectRecipe(recipe)"
      >
        <img
          :src="recipe.imagen"
          :alt="recipe.nombre"
          class="recipe-image"
        />
        <div class="recipe-info">
          <h2>{{ recipe.nombre }}</h2>
          <p>{{ recipe.descripcion }}</p>
          <button @click="selectRecipe(recipe)">Ver Receta</button>
        </div>
      </div>
    </div>

    <!-- Detalles de la receta seleccionada -->
    <div v-if="selectedRecipe" class="recipe-details" ref="recipeDetails">
      <h2>{{ selectedRecipe.nombre }}</h2>
      <div class="ingredients-list">
        <h3>Ingredientes:</h3>
        <ul>
          <li v-for="(ingrediente, index) in selectedRecipe.ingredientes" :key="index">
            {{ ingrediente }}
          </li>
        </ul>
      </div>
      <div class="recipe-description">
        <h3>Descripción:</h3>
        <p>{{ selectedRecipe.descripcion }}</p>
      </div>
      <iframe
        :src="selectedRecipe.video_url"
        frameborder="0"
        allowfullscreen
        class="recipe-video"
      ></iframe>

      <button @click="closeRecipeDetails">Cerrar</button>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'; // Configuración de Axios

export default {
  data() {
    return {
      recipes: [], // Lista de recetas obtenida desde el backend
      selectedRecipe: null, // Receta seleccionada
    };
  },
  methods: {
    // Método para obtener las recetas desde el backend
    async fetchRecipes() {
      try {
        const response = await api.get('/bebidas'); // Cambiar al endpoint real
        this.recipes = response.data; // Asignar los datos obtenidos
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    },
    selectRecipe(recipe) {
      this.selectedRecipe = recipe;
      this.$nextTick(() => {
        const section = this.$refs.recipeDetails;
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      });
    },
    closeRecipeDetails() {
      this.selectedRecipe = null;
    },
  },
  mounted() {
    this.fetchRecipes(); // Llamar al método para obtener recetas cuando el componente se monte
  },
};


</script>

<style scoped>
/* Conservamos los estilos que ya tienes */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.entradas-page {
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 80px;
  color: white;
  margin-top: 60px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  animation: glow 1.5s ease-in-out infinite;
}

.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  padding-bottom: 35px;
}

.recipe-card {
  background-color: white;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 10px rgba(9, 9, 9, 0.8);
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
}

.recipe-info {
  padding: 15px;
}

.recipe-info h2 {
  font-size: 20px;
  color: #a80000;
  margin-bottom: 10px;
}

.recipe-info p {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.recipe-info button {
  padding: 8px 16px;
  background-color: #a80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.recipe-info button:hover {
  background-color: #f44336;
}

.recipe-details {
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  margin: 20px auto;
}

.recipe-details h2 {
  color: #a80000;
}

.recipe-details .recipe-video {
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-radius: 10px;
}

.ingredients-list,
.recipe-description {
  margin-top: 20px;
  color: black;
}

.ingredients-list h3,
.recipe-description h3 {
  color: #a80000;
}

.ingredients-list ul {
  list-style-type: none;
  padding: 0;
}

.ingredients-list li {
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
}

.recipe-details button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #a80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.recipe-details button:hover {
  background-color: #f44336;
}
</style>
