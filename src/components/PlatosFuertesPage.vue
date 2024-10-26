<template> 
    <div class="platos-fuertes-page" style="margin-bottom: 21px;">
  
      <!-- Video de fondo -->
      <div class="background-video">
        <video autoplay loop muted>
          <source src="https://videos.pexels.com/video-files/4589119/4589119-hd_1920_1080_24fps.mp4" type="video/mp4" />
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
  export default {
    data() {
      return {
        recipes: [
          {
            id: 1,
            name: "Lomo Saltado",
            description: "Delicioso lomo saltado peruano.",
            image: "https://example.com/lomo-saltado.jpg",
            videoUrl: "https://www.youtube.com/embed/example",
            ingredients: ["Carne de res", "Cebolla", "Tomate", "Papas fritas", "Arroz"]
          },
          {
            id: 2,
            name: "Pasta Alfredo",
            description: "Pasta cremosa al estilo Alfredo.",
            image: "https://example.com/pasta-alfredo.jpg",
            videoUrl: "https://www.youtube.com/embed/example",
            ingredients: ["Pasta", "Crema", "Queso parmesano", "Mantequilla", "Perejil"]
          },
          {
            id: 3,
            name: "Pollo a la brasa",
            description: "Jugoso pollo a la brasa con especias.",
            image: "https://example.com/pollo-brasa.jpg",
            videoUrl: "https://www.youtube.com/embed/example",
            ingredients: ["Pollo", "Ajo", "Pimienta", "Limón", "Especias"]
          },
          {
            id: 4,
            name: "Bandeja Paisa",
            description: "Típico plato colombiano con frijoles, arroz, chicharrón y huevo.",
            image: "https://example.com/bandeja-paisa.jpg",
            videoUrl: "https://www.youtube.com/embed/example",
            ingredients: ["Frijoles", "Arroz", "Carne molida", "Chicharrón", "Huevo"]
          }
        ],
        selectedRecipe: null,
      };
    },
    methods: {
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
  /* Mantén los mismos estilos que el componente de Postres para mantener consistencia */
  </style>
  