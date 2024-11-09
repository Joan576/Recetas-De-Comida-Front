<template>
  <div class="feed-page">
    <!-- Header del feed -->
    <header class="feed-header">
      <h1>Bienvenido al Feed</h1>
      <p>Explora nuestras recetas destacadas y más populares.</p>
    </header>

    <!-- Contenedor de recetas del feed -->
    <div class="feed-recipes-container">
      <div
        class="feed-recipe-card"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <!-- Imagen de la receta -->
        <img :src="recipe.image" :alt="recipe.name" class="recipe-image" />
        
        <!-- Información de la receta -->
        <div class="recipe-info">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
          <button @click="viewRecipeDetails(recipe)">Ver Receta</button>
          <button @click="addToFavorites(recipe)">Favoritos</button>
        </div>
      </div>
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
          name: "Receta Ejemplo",
          description: "Una breve descripción de la receta.",
          image: "https://example.com/image.jpg",
        },
        // Más recetas
      ],
    };
  },
  methods: {
    viewRecipeDetails(recipe) {
      // Lógica para ver los detalles de la receta
      this.$router.push({ name: "RecipeDetails", params: { id: recipe.id } });
    },
    addToFavorites(recipe) {
      // Lógica para agregar a favoritos
      console.log("Agregado a favoritos:", recipe);
    },
  },
};
</script>

<style scoped>
.feed-page {
  padding: 20px;
  background-color: #f4f4f4;
}

.feed-header {
  text-align: center;
  margin-bottom: 40px;
}

.feed-recipes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.feed-recipe-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.feed-recipe-card:hover {
  transform: scale(1.05);
}

.recipe-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.recipe-info {
  padding: 10px;
}

.recipe-info h2 {
  font-size: 18px;
  color: #333;
}

.recipe-info p {
  font-size: 14px;
  color: #777;
}

.recipe-info button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #a80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.recipe-info button:hover {
  background-color: #f44336;
}
</style>