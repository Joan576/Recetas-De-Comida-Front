<template>
    <div class="guardadoBebidas-page">
      <hr>
      <h1>Bebidas</h1>
  <!-- Contenedor de recetas guardadas -->
  <div class="saved-recipes-container">
    <div
      class="recipe-card"
      v-for="recipe in savedRecipes"
      :key="recipe.id"
    >
      <img
        :src="recipe.imagen"
        :alt="recipe.nombre"
        class="recipe-image"
      />
      <div class="recipe-info">
        <h2>{{ recipe.nombre }}</h2>
        <p>{{ recipe.descripcion }}</p>
        <div class="button-group">
          <button @click="viewRecipe(recipe)">Ver Receta</button>
          <button @click="deleteSavedRecipe(recipe.recipe_id, recipe.recipe_type)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Transición para detalles de la receta -->
  <transition name="fade">
    <div v-if="selectedRecipe" class="recipe-details" ref="recipeDetails">
      <h2>{{ selectedRecipe.nombre }}</h2>
      <div class="ingredients-list">
        <h3>Ingredientes:</h3>
        <ul>
          <li
            v-for="(ingrediente, index) in selectedRecipe.ingredientes"
            :key="index"
          >
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
  </transition>

  <!-- Mensaje de "sin recetas guardadas" -->
  <div v-if="savedRecipes.length === 0" class="no-recipes">
    <p style="color: white;">No tienes recetas guardadas de bebidas todavía.</p>
  </div>
  </div>
  </template>

  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import api from '@/services/api'; // Configuración de Axios
  import '@/styles/saved.css';

  // Referencias de estado
  const userId = ref(localStorage.getItem('userId')); // Obtener el ID del usuario logueado
  const savedRecipes = ref([]); // Lista de recetas guardadas
  const selectedRecipe = ref(null); // Receta seleccionada para mostrar detalles

  // Método para obtener las recetas guardadas del usuario
  const fetchSavedRecipes = async () => {
  if (!userId.value) {
  alert('Debes iniciar sesión para ver tus recetas guardadas');
  return;
  }

  try {
  const response = await api.get(`/saved-recipes/${userId.value}`);
  savedRecipes.value = response.data.filter(
    (recipe) => recipe.recipe_type === 'bebidas'
  );
  console.log('Recetas guardadas de entradas obtenidas:', savedRecipes.value);
  } catch (error) {
  console.error('Error al obtener las recetas guardadas:', error);
  }
  };

  // Método para mostrar detalles de una receta
  const viewRecipe = (recipe) => {
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

  // Método para cerrar los detalles de una receta con animación
  const closeRecipeDetails = () => {
  // Usa `ref` para apuntar al contenedor del componente
  const section = document.querySelector('.guardadoBebidas-page'); // Cambia al contenedor específico del componente
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Asegura que el inicio del contenedor sea visible
    });
  }
  selectedRecipe.value = null;
};

  // Método para eliminar una receta guardada
  const deleteSavedRecipe = async (recipeId, recipeType) => {
  try {
  // Incluye `recipeType` en la URL
  await api.delete(`/saved-recipes/${userId.value}/${recipeId}/${recipeType}`);

  // Elimina la receta de la lista local considerando el `recipe_type`
  savedRecipes.value = savedRecipes.value.filter(
    (recipe) =>
      !(recipe.recipe_id === recipeId && recipe.recipe_type === recipeType)
  );

  // Si la receta eliminada es la que está actualmente seleccionada, cerramos los detalles
  if (selectedRecipe.value && selectedRecipe.value.recipe_id === recipeId && selectedRecipe.value.recipe_type === recipeType) {
    closeRecipeDetails();
  }

  alert('Receta eliminada de tus guardados');
  } catch (error) {
  console.error('Error al eliminar la receta guardada:', error);
  alert('Hubo un error al eliminar la receta guardada');
  }
  };


  // Llama a la función para obtener las recetas guardadas al montar el componente
  onMounted(() => {
  fetchSavedRecipes();
  });
  </script>

  
<style scooped>

.guardadoBebidas-page{
  background-color: #0e0e0e;
  padding: 20px;
  padding-bottom: 40px;
  text-align: Left;
  color: #333;
}
</style>