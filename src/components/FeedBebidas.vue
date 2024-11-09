<template>
    <section class="feed-section bebidas">
      <div class="feed-content">
        <img
          src="https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg"
          alt="Bebidas y Cócteles"
          class="feed-image"
        />
        <div class="feed-info">
          <h2>Bebidas y Cócteles</h2>
          <p>
            Las mejores bebidas y cócteles para disfrutar en cualquier ocasión. ¡Te sorprenderán las combinaciones!
          </p>
          <button @click="goToRecipes('bebidas')">Ver más</button>
        </div>
      </div>
      <!-- Muestra una receta específica de Bebidas y Cócteles -->
      <div class="recipe-preview">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/bebidas-cocktail-portada-1620751394.jpg"
          alt="Receta de Cóctel"
          class="recipe-image"
        />
        <div class="recipe-details">
          <h3>Cóctel Refrescante</h3>
          <p>Refresca tu tarde con este delicioso cóctel tropical.</p>
          <button @click="goToRecipes('bebidas')">Ver más</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      goToRecipes(category) {
        const isAuthenticated = localStorage.getItem('user');
  
        if (isAuthenticated) {
          this.$router.push(`/recipes/${category}`);
        } else {
          this.$router.push('/login');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Los estilos son los mismos que en el componente anterior, ajustados para cada sección */
  </style>
  