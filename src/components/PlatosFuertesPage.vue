<template> 
  <div class="platos-fuertes-page" style="margin-bottom: 21px;">

    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="../../videos/3298401-uhd_4096_2160_25fps.mp4" type="video/mp4"/>
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Platos Fuertes</h1>

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
        const response = await api.get('/platos-fuertes'); // Cambiar al endpoint real
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
.postres-page {
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
  box-shadow: 0 2px 10px rgba(9, 9, 9, 0.8);
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.recipe-video {
  width: 100%;
  height: 250px;
  border-radius: 10px;
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

.recipe-video {
  width: 100%; /* Ajusta al 100% del contenedor */
  height: 400px; /* Asegúrate de que el alto sea suficiente */
  margin-top: 20px;
  border-radius: 10px;
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