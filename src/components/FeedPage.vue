<template>
  <div class="feed-page">
    <!-- Sección Entradas y Acompañantes -->
    <section class="feed-section entradas">
      <div class="feed-content">
        <img
          src="https://assets.unileversolutions.com/recipes-v2/244540.jpg"
          alt="Entradas y Acompañantes"
          class="feed-image"
        />
        <div class="feed-info">
          <h2>Entradas y Acompañantes</h2>
          <p>
            ¡Explora las mejores recetas para entradas y acompañantes! Descubre nuevas formas de sorprender a tus invitados con estos deliciosos platos.
          </p>
          <button @click="goToRecipes('entradas')">Ver más</button>
        </div>
      </div>
      <!-- Muestra una receta específica de Entradas y Acompañantes -->
      <div class="recipe-preview">
        <img
          src="https://www.cocinavital.mx/wp-content/uploads/2019/09/recetas_de_botanas_sencillas.jpg"
          alt="Receta de Entrada"
          class="recipe-image"
        />
        <div class="recipe-details">
          <h3>Receta de Entrada</h3>
          <p>Deliciosas botanas para comenzar tu comida con el pie derecho.</p>
          <button @click="goToRecipes('entradas')">Ver más</button>
        </div>
      </div>
    </section>

    <!-- Sección Platos Fuertes -->
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

    <!-- Sección Postres -->
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

    <!-- Sección Bebidas y Cócteles -->
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
  </div>
</template>

<script>
export default {
  methods: {
    goToRecipes(category) {
      const isAuthenticated = localStorage.getItem('user'); // Verifica si hay un usuario en localStorage

      if (isAuthenticated) {
        // Si el usuario está autenticado, lo redirige a las recetas
        this.$router.push(`/recipes/${category}`);
      } else {
        // Si no está autenticado, lo redirige al login
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
/* Fondo de la página */
.feed-page {
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

/* Estilo para cada sección de recetas */
.feed-section {
  margin: 40px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Estilo de las imágenes */
.feed-image,
.recipe-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

/* Detalles de las recetas */
.feed-info {
  margin-top: 15px;
}

.recipe-preview {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.recipe-details {
  width: 60%;
}

.recipe-details h3 {
  font-size: 20px;
  font-weight: bold;
}

.recipe-details p {
  margin: 10px 0;
}

button {
  background-color: #a80000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #f44336;
}
</style>
