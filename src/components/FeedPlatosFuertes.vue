<template>
    <section class="feed-section platos-fuertes">
      <div class="feed-content">
        <img
          src="https://cdn.shopify.com/s/files/1/0428/9937/4229/files/tiempos_de_coccion_de_carne_a_la_parrilla_1024x1024.jpg?v=1682630374"
          alt="Platos Fuertes"
          class="feed-image"
        />
        <div class="feed-info">
          <h2>Platos Fuertes</h2>
          <p>
            Si buscas algo contundente, los platos fuertes no te decepcionarán. Encuentra recetas perfectas para cualquier ocasión.
          </p>
          <button @click="goToRecipes('platos-fuertes')">Ver más</button>
        </div>
      </div>
      <!-- Muestra una receta específica de Platos Fuertes -->
      <div class="recipe-preview">
        <img
          src="https://www.comedera.com/wp-content/uploads/2021/03/plato-de-carne.jpg"
          alt="Receta de Plato Fuerte"
          class="recipe-image"
        />
        <div class="recipe-details">
          <h3>Plato Fuerte con Carne</h3>
          <p>Un delicioso plato de carne a la parrilla para sorprender a tus invitados.</p>
          <button @click="goToRecipes('platos-fuertes')">Ver más</button>
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
  