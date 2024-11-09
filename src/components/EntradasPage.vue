<template>
  <div class="entradas-page" style="margin-bottom: 21px;">
    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="../../videos/fondo_tabla.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Entradas y Acompañantes</h1>

    <!-- Contenedor de las recetas -->
    <div class="recipes-container">
      <div
        class="recipe-card"
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="selectRecipe(recipe)"
      >
        <img
          :src="recipe.image"
          :alt="recipe.name"
          class="recipe-image"
        />
        <div class="recipe-info">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
          <button @click="selectRecipe(recipe)">Ver Receta</button>
        </div>
      </div>
    </div>

    <!-- Detalles de la receta seleccionada -->
    <div v-if="selectedRecipe" class="recipe-details" ref="recipeDetails">
      <h2>{{ selectedRecipe.name }}</h2>
      <div class="ingredients-list">
        <h3>Ingredientes:</h3>
        <ul>
          <li v-for="(ingredient, index) in selectedRecipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="recipe-description">
        <h3>Descripción:</h3>
        <p>{{ selectedRecipe.description }}</p>
      </div>
      <iframe
        :src="selectedRecipe.videoUrl"
        frameborder="0"
        allowfullscreen
        class="recipe-video"
      ></iframe>
      <button @click="closeRecipeDetails">Cerrar</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'; // Importa axios

export default {
  data() {
    return {
      recipes: [], // Cambiar para inicializar como un array vacío
      selectedRecipe: null,
    };
  },
  created() {
    this.fetchRecipes(); // Llama a la función para obtener las recetas cuando el componente se monta
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await axios.get('http://localhost:4000/api/recipes'); // Cambia 'tu-backend-url' por tu URL real
        this.recipes = response.data; // Asigna los datos obtenidos a recipes
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
          behavior: 'smooth'
        });
      });
    },
    closeRecipeDetails() {
      this.selectedRecipe = null;
    }
  }
};
</script>

<style scoped>
/* Video de fondo */
.background-video {
  position: fixed; /* Hace que el video esté fijado en el fondo */
  top: 0;
  left: 0;
  width: 100%; /* Ocupa el ancho completo */
  height: 100%; /* Ocupa la altura completa */
  z-index: -1; /* Coloca el video detrás del contenido */
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que el video cubra el área */
}

/* Fondo de la página */
.entradas-page {
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
}

/* Título de la página */
.title {
  text-align: center;
  font-size: 48px; /* Tamaño más grande */
  margin-bottom: 80px;
  color: white;
  margin-top: 60px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Contorno oscuro para que no se pierda */
  animation: glow 1.5s ease-in-out infinite; /* Efecto de brillo suave */
}

/* Contenedor de las recetas */
.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  padding-bottom: 35px;
}

/* Tarjeta de receta */
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

/* Imagen de la receta */
.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
}

/* Información de la receta */
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

/* Estilos para los detalles de la receta */
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
