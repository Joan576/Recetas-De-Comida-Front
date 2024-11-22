<template>
  <div class="recipe-page">
    <!-- Sección Entradas y Acompañantes -->
    <section class="recipe-page-section recipe-page-entradas" :class="{ 'recipe-page-reverse': isOdd(1) }">
      <div class="recipe-page-content">
        <img
          src="https://assets.unileversolutions.com/recipes-v2/244540.jpg"
          alt="Entradas y Acompañantes"
          class="recipe-page-image"
        />
        <div class="recipe-page-info">
          <h2>Entradas y Acompañantes</h2>
          <p>
            Las entradas y acompañantes más fáciles y deliciosas. ¡Aquí simplificamos la alta cocina para que cualquier persona pueda inventar, descubrir y cocinar!
          </p>
          <button @click="goToRecipes('entradas')">Ver ahora</button>
        </div>
      </div>
    </section>

    <!-- Sección Platos Fuertes -->
    <section class="recipe-page-section recipe-page-platos-fuertes" :class="{ 'recipe-page-reverse': isOdd(2) }">
      <div class="recipe-page-content">
        <img
          src="https://cdn.shopify.com/s/files/1/0428/9937/4229/files/tiempos_de_coccion_de_carne_a_la_parrilla_1024x1024.jpg?v=1682630374"
          alt="Platos Fuertes"
          class="recipe-page-image"
        />
        <div class="recipe-page-info">
          <h2>Platos Fuertes</h2>
          <p>
            Descubre los platos fuertes más suculentos que te harán sentir como un chef profesional. ¡Cocina y disfruta de cada bocado!
          </p>
          <button @click="goToRecipes('platos-fuertes')">Ver ahora</button>
        </div>
      </div>
    </section>

    <!-- Sección Postres -->
    <section class="recipe-page-section recipe-page-postres" :class="{ 'recipe-page-reverse': isOdd(3) }">
      <div class="recipe-page-content">
        <img
          src="https://chocolatestorras.com/wp-content/uploads/2023/05/postres-verano-con-chocolate.jpg"
          alt="Postres"
          class="recipe-page-image"
        />
        <div class="recipe-page-info">
          <h2>Postres</h2>
          <p>
            ¡Endulza tu vida con los postres más ricos y fáciles de preparar! Desde tartas hasta helados, tenemos todo lo que necesitas para sorprender.
          </p>
          <button @click="goToRecipes('postres')">Ver ahora</button>
        </div>
      </div>
    </section>

    <!-- Sección Bebidas y Cócteles -->
    <section class="recipe-page-section recipe-page-bebidas" :class="{ 'recipe-page-reverse': isOdd(4) }">
      <div class="recipe-page-content">
        <img
          src="https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg"
          alt="Bebidas y Cócteles"
          class="recipe-page-image"
        />
        <div class="recipe-page-info">
          <h2>Bebidas y Cócteles</h2>
          <p>
            Refresca tu día o sorprende a tus invitados con nuestras recetas de bebidas y cócteles. ¡Sabores únicos y combinaciones deliciosas!
          </p>
          <button @click="goToRecipes('bebidas')">Ver ahora</button>
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
    },
    isOdd(index) {
      return index % 2 !== 0;
    },
  },
};
</script>

<style scoped>
/* Fondo de la página */
.recipe-page {
  background-image: url('https://images.pexels.com/photos/5741508/pexels-photo-5741508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 20px;
}

/* Estilo para cada sección de recetas */
.recipe-page-section {
  margin: 40px 0;
  padding: 40px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  position: relative;
  z-index: 1;
  border: 3px solid #a80000;
  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.5);
}

.recipe-page-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  border-radius: 15px;
}

/* Fondos específicos para cada sección */
.recipe-page-entradas {
  background-image: url('https://www.cocinavital.mx/wp-content/uploads/2019/09/recetas_de_botanas_sencillas.jpg');
}

.recipe-page-platos-fuertes {
  background-image: url('https://www.comedera.com/wp-content/uploads/2021/03/plato-de-carne.jpg');
}

.recipe-page-postres {
  background-image: url('https://okdiario.com/img/2022/09/22/postres-de-helado-655x368.jpg');
}

.recipe-page-bebidas {
  background-image: url('https://hips.hearstapps.com/hmg-prod/images/bebidas-cocktail-portada-1620751394.jpg');
}

.recipe-page-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

/* Secciones alternadas */
.recipe-page-section.recipe-page-reverse .recipe-page-content {
  flex-direction: row-reverse;
}

.recipe-page-image {
  width: 45%;
  max-width: 500px;
  border-radius: 10%;
  object-fit: cover;
  border: 5px solid #a80000; /* Agrega un borde rojo */
  transition: border-color 0.3s ease; /* Animación para cambiar el color del borde */
}

.recipe-page-image:hover {
  border-color: #ff1100d6; /* Cambia el color del borde al pasar el cursor */
}


.recipe-page-info {
  width: 45%;
  text-align: left;
}

.recipe-page-info h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.recipe-page-info p {
  font-size: 18px;
  margin-bottom: 20px;
}

.recipe-page-info button {
  padding: 10px 20px;
  background-color: #a80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.recipe-page-info button:hover {
  background-color: #f44336;
}
</style>
