<template>
  
    <div class="recommendations-section">
      <h2>Recomendaciones del Chef</h2>
      <div class="cards-container">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
          <img :src="recipe.image" alt="Imagen de receta" />
          <div class="recipe-info">
            <h3>{{ recipe.name }}</h3>
            <p>{{ recipe.description }}</p>
            <button @click="viewRecipe(recipe.id)">Ver Receta</button>
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
          // Ejemplo de datos estáticos (estos se reemplazarán al integrar el backend)
          {
            id: 1,
            name: "Ensalada César",
            description: "Deliciosa ensalada con aderezo casero.",
            image: "https://example.com/ensalada.jpg",
          },
          {
            id: 2,
            name: "Pasta Alfredo",
            description: "Clásica pasta con salsa Alfredo cremosa.",
            image: "https://example.com/pasta.jpg",
          },
          {
            id: 3,
            name: "Tacos de Pollo",
            description: "Tacos al estilo mexicano con pollo y guacamole.",
            image: "https://example.com/tacos.jpg",
          },
          {
            id: 4,
            name: "Brownie de Chocolate",
            description: "Postre clásico con un toque de chocolate intenso.",
            image: "https://example.com/brownie.jpg",
          },
        ],
      };
    },
    methods: {
      viewRecipe(recipeId) {
        this.$router.push(`/recipes/${recipeId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .recommendations-section {
    margin-top: 100px;
    text-align: center;
  }
  
  .recommendations-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #b80000;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .recipe-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 250px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .recipe-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .recipe-info {
    padding: 15px;
  }
  
  .recipe-info h3 {
    font-size: 1.2rem;
    color: #b30000;
    margin-bottom: 10px;
  }
  
  .recipe-info p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 15px;
  }
  
  .recipe-card button {
    background: #b30000;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .recipe-card button:hover {
    background: #8b0000;
  }
  
  .recipe-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  