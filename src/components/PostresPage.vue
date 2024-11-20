<template>
  <div class="postres-page" style="margin-bottom: 21px;">
    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="https://videos.pexels.com/video-files/4589119/4589119-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Postres</h1>

    <!-- Contenedor de las recetas -->
    <div class="recipes-container">
      <div
        class="recipe-card"
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="selectRecipe(recipe)"
      >
        <img
          :src="recipe.imagen"
          :alt="recipe.nombre"
          class="recipe-image"
        />
        <div class="recipe-info">
          <h2>{{ recipe.nombre }}</h2>
          <p>{{ recipe.descripcion }}</p>
          <button @click="selectRecipe(recipe)">Ver Receta</button>
        </div>
      </div>
    </div>

    <!-- Detalles de la receta seleccionada -->
    <div v-if="selectedRecipe" class="recipe-details" ref="recipeDetails">
      <!-- Botón Guardar/Quitar -->
      <button
        class="save-button"
        :class="{ saved: isRecipeSaved(selectedRecipe.id) }"
        @click="isRecipeSaved(selectedRecipe.id) ? unsaveRecipe(selectedRecipe) : saveRecipe(selectedRecipe)"
      >
        {{ isRecipeSaved(selectedRecipe.id) ? 'Guardado' : 'Guardar' }}
      </button>

      <h2>{{ selectedRecipe.nombre }}</h2>
      <div class="ingredients-list">
        <h3>Ingredientes:</h3>
        <ul>
          <li v-for="(ingrediente, index) in selectedRecipe.ingredientes" :key="index">
            {{ ingrediente }}
          </li>
        </ul>
      </div>
      <div class="recipe-description">
        <h3>Descripción:</h3>
        <p>{{ selectedRecipe.descripcion }}</p>
      </div>
      <iframe
        :src="selectedRecipe.video_url"
        frameborder="0"
        allowfullscreen
        class="recipe-video"
      ></iframe>

      <button @click="closeRecipeDetails">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import api from '@/services/api';
import '@/styles/recipes.css'; // Importa el CSS compartido

// Inicializamos variables reactivas
const userId = ref(localStorage.getItem('userId')); // Obtiene el ID del usuario logueado
const recipes = ref([]); // Lista de recetas obtenida desde el backend
const selectedRecipe = ref(null); // Receta seleccionada
const savedRecipes = ref([]); // Lista de IDs de recetas guardadas

// Obtener las recetas del backend
const fetchRecipes = async () => {
  try {
    const response = await api.get('/postres'); // Cambia al endpoint real
    recipes.value = response.data;
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
  }
};

// Obtener recetas guardadas del usuario logueado
const fetchSavedRecipes = async () => {
  if (!userId.value) return;

  try {
    const response = await api.get(`/saved-recipes/${userId.value}`);
    savedRecipes.value = response.data.map((recipe) => recipe.recipe_id); // IDs de las recetas guardadas
  } catch (error) {
    console.error('Error al obtener las recetas guardadas:', error);
  }
};

// Verificar si una receta está guardada
const isRecipeSaved = (recipeId) => {
  return savedRecipes.value.includes(recipeId);
};

// Guardar una receta
const saveRecipe = async (recipe) => {
  if (!userId.value) {
    alert('Debes iniciar sesión para guardar recetas');
    return;
  }

  if (isRecipeSaved(recipe.id)) {
    alert('Esta receta ya está guardada');
    return;
  }

  try {
    const response = await api.post('/save', {
      user_id: userId.value,
      recipe_id: recipe.id,
      recipe_type: 'postres', // Tipo de receta
    });

    savedRecipes.value.push(recipe.id); // Agregar a la lista de guardadas
    alert('Receta guardada exitosamente');
    console.log('Respuesta del servidor:', response.data);
  } catch (error) {
    console.error('Error al guardar la receta:', error);
    alert('Hubo un error al guardar la receta');
  }
};

// Quitar guardado de una receta
const unsaveRecipe = async (recipe) => {
  if (!userId.value) {
    alert('Debes iniciar sesión para quitar recetas guardadas');
    return;
  }

  try {
    const response = await api.delete(`/saved-recipes/${userId.value}/${recipe.id}`);

    // Remover de la lista de recetas guardadas
    savedRecipes.value = savedRecipes.value.filter((id) => id !== recipe.id);

    alert('Receta eliminada de guardados');
    console.log('Respuesta del servidor:', response.data);
  } catch (error) {
    console.error('Error al quitar la receta guardada:', error);
    alert('Hubo un error al quitar la receta guardada');
  }
};

// Seleccionar una receta
const selectRecipe = (recipe) => {
  selectedRecipe.value = recipe;
  nextTick(() => {
    const section = document.querySelector('.recipe-details');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  });
};

// Cerrar detalles de la receta
const closeRecipeDetails = () => {
  selectedRecipe.value = null;
};

// Ejecutar al montar el componente
onMounted(async () => {
  await fetchRecipes();
  await fetchSavedRecipes();
});
</script>

