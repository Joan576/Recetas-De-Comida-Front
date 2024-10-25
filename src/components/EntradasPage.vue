<template>
  <div class="entradas-page" style="margin-bottom: 21px;">
    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="../../videos/fondo_tabla.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Entradas y Acompañantes</h1>

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
          name: "Nachos con Carne",
          description: "Deliciosos nachos con carne, queso y guacamole.",
          image:
            "https://assets.unileversolutions.com/recipes-v2/244540.jpg",
          videoUrl: "https://www.youtube.com/embed/uRw5aSM1VWY",
          ingredients: ["Carne", "Queso", "Guacamole", "Nachos", "Cebolla"]
        },
        {
          id: 2,
          name: "Canastas de queso y atún",
          description:
            "Deliciosas canastas hechas de queso con relleno de atún.",
          image:
            "https://images.getrecipekit.com/20230103151855-canastitas-de-at-c3-ban.png",
          videoUrl: "https://www.youtube.com/embed/S--hTMZWECY",
          ingredients: ["Queso", "Atún", "Tomate", "Cebolla"]
        },
        {
          id: 3,
          name: "Tostadas francesas",
          description:
            "Riquísimas tostadas francesas con salsa de queso dulce, fáciles de hacer.",
          image:
            "https://t1.uc.ltmcdn.com/es/posts/4/4/0/como_hacer_una_tostada_francesa_rapidamente_16044_orig.jpg",
          videoUrl: "https://www.youtube.com/embed/AsRWf2QDlMM",
          ingredients: [
            "1 Rebanada de pan",
            "2 huevos",
            "1/2 taza de leche",
            "1 cucharada de leche condensada o azúcar",
            "1 cucharadita de café",
            "5 cucharadas de quesito (queso fresco)",
            "5 cucharadas de crema de leche",
            "3 cucharadas de dulce (chocolate)"
          ]
        },
        {
          id: 4,
          name: "Roscones de queso",
          description:
            "Deliciosos roscones de queso para preparar en el horno o airfryer.",
          image:
            "https://assets.elgourmet.com/wp-content/uploads/2023/10/shutterstock_1758025376-1-1024x683.jpg.webp",
          videoUrl: "https://www.youtube.com/embed/lIlswhsZu-k",
          ingredients: [
            "5 cucharadas de leche en polvo",
            "3 cucharadas de harina de trigo",
            "1/2 taza de queso parmesano",
            "150 gramos de quesito"
          ]
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
.entradas-page {
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
}

/* Título de la página */
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
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