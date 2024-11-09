<template>
    <section class="feed-section entradas">
      <div class="carousel-container">
        <img
          :src="currentImage"
          alt="Entradas y Acompañantes"
          class="feed-image"
        />
      </div>
  
      <div class="feed-info">
        <h2>Entradas y Acompañantes</h2>
        <p>
          ¡Explora las mejores recetas para entradas y acompañantes! Descubre nuevas formas de sorprender a tus invitados con estos deliciosos platos.
        </p>
        <button @click="goToRecipes('entradas')">Ver más</button>
      </div>
  
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "https://assets.unileversolutions.com/recipes-v2/244540.jpg",
          "https://cdn.shopify.com/s/files/1/0428/9937/4229/files/tiempos_de_coccion_de_carne_a_la_parrilla_1024x1024.jpg?v=1682630374",
          "https://chocolatestorras.com/wp-content/uploads/2023/05/postres-verano-con-chocolate.jpg",
          "https://termosyeti.com/wp-content/uploads/2023/10/bebidas-alcoholicas.jpg"
        ],
        currentIndex: 0
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
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
    },
    mounted() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000); // Cambia la imagen cada 3 segundos
    }
  };
  </script>
  
  <style scoped>
  /* Estilo general del carrusel */
  .carousel-container {
    position: relative;
    max-width: 100%;
    height: auto;
  }
  
  .feed-image {
    width: 100%;
    object-fit: cover;
    height: 350px; /* Puedes ajustar la altura si lo necesitas */
    border-radius: 10px;
    transition: opacity 1s ease-in-out;
  }
  
  /* Estilos de la información de la sección */
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
  