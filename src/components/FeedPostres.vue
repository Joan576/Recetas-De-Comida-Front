<template>
    <section class="feed-section postres">
      <div class="feed-content">
        <img
          src="https://chocolatestorras.com/wp-content/uploads/2023/05/postres-verano-con-chocolate.jpg"
          alt="Postres"
          class="feed-image"
        />
        <div class="feed-info">
          <h2>Postres</h2>
          <p>
            Endulza tu día con los postres más deliciosos. Desde pasteles hasta helados, encuentra la receta perfecta para tu antojo.
          </p>
          <button @click="goToRecipes('postres')">Ver más</button>
        </div>
      </div>
      <!-- Muestra una receta específica de Postres -->
      <div class="recipe-preview">
        <img
          src="https://okdiario.com/img/2022/09/22/postres-de-helado-655x368.jpg"
          alt="Receta de Postre"
          class="recipe-image"
        />
        <div class="recipe-details">
          <h3>Helado Casero</h3>
          <p>Disfruta de un delicioso helado casero para acompañar cualquier momento del día.</p>
          <button @click="goToRecipes('postres')">Ver más</button>
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
  