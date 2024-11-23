<template>
  <div class="recetas-page" style="margin-bottom: 21px;">
    <!-- Video de fondo -->
    <div class="background-video">
      <video autoplay loop muted>
        <source src="../../videos/fondo_tabla.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </div>

    <!-- Título de la sección -->
    <h1 class="title">Entradas</h1>

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
      <button @click="selectRecipe(recipe)" style="margin-left: 60px;">Ver Receta</button>
    </div>
  </div>
</div>

<!-- Detalles de la receta seleccionada -->
<div v-if="selectedRecipe" class="recipe-details" ref="recipeDetails">
  <!-- Botón Guardar/Quitar -->
  <button
    class="save-button"
    :class="{ saved: isRecipeSaved(selectedRecipe.id, selectedRecipe.recipe_type) }"
    @click="isRecipeSaved(selectedRecipe.id, selectedRecipe.recipe_type) ? unsaveRecipe(selectedRecipe) : saveRecipe(selectedRecipe)"
  >
    {{ isRecipeSaved(selectedRecipe.id, selectedRecipe.recipe_type) ? 'Guardado' : 'Guardar' }}
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

// Variables reactivas
const userId = ref(localStorage.getItem('userId')); // ID del usuario logueado
const recipes = ref([]); // Lista de recetas del backend
const selectedRecipe = ref(null); // Receta seleccionada
const savedRecipes = ref([]); // Recetas guardadas

// Obtener las recetas del backend
const fetchRecipes = async () => {
try {
const response = await api.get('/entradas'); // Endpoint real
recipes.value = response.data.map((recipe) => ({
  ...recipe,
  recipe_type: 'entradas', // Asegura que el tipo de receta esté presente
}));
} catch (error) {
console.error('Error al obtener las recetas:', error);
}
};

// Obtener las recetas guardadas
const fetchSavedRecipes = async () => {
if (!userId.value) return;

try {
const response = await api.get(`/saved-recipes/${userId.value}`);
savedRecipes.value = response.data; // Incluye todos los datos de la receta guardada
} catch (error) {
console.error('Error al obtener las recetas guardadas:', error);
}
};

// Verificar si una receta está guardada
const isRecipeSaved = (recipeId, recipeType) => {
return savedRecipes.value.some(
(recipe) => recipe.recipe_id === recipeId && recipe.recipe_type === recipeType
);
};

// Guardar una receta
const saveRecipe = async (recipe) => {
if (!userId.value) {
alert('Debes iniciar sesión para guardar recetas');
return;
}

try {
const response = await api.post('/save', {
  user_id: userId.value,
  recipe_id: recipe.id,
  recipe_type: recipe.recipe_type,
});

// Agregar a la lista de guardadas
savedRecipes.value.push({
  recipe_id: recipe.id,
  recipe_type: recipe.recipe_type,
});

alert('Receta guardada exitosamente');
console.log('Respuesta del servidor:', response.data);
} catch (error) {
console.error('Error al guardar la receta:', error);
alert('Hubo un error al guardar la receta');
}
};

// Quitar una receta guardada
const unsaveRecipe = async (recipe) => {
if (!userId.value) {
alert('Debes iniciar sesión para quitar recetas guardadas');
return;
}

console.log('Intentando quitar receta:', recipe);

if (!recipe.id || !recipe.recipe_type) {
console.error('El objeto receta no tiene ID o tipo válido:', recipe);
alert('No se pudo eliminar la receta. Datos incompletos.');
return;
}

try {
const response = await api.delete(`/saved-recipes/${userId.value}/${recipe.id}/${recipe.recipe_type}`);

// Remover de la lista de guardadas
savedRecipes.value = savedRecipes.value.filter(
  (savedRecipe) =>
    savedRecipe.recipe_id !== recipe.id || savedRecipe.recipe_type !== recipe.recipe_type
);

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

// Método para cerrar los detalles de una receta con animación
const closeRecipeDetails = () => {
  const section = document.querySelector('.recetas-page');
  if (section) {
    window.scrollTo({
      top: section.offsetTop, // Ajusta este valor para desplazar más hacia arriba
      behavior: 'smooth',
    });
  }
  selectedRecipe.value = null;
};

// Cargar las recetas y recetas guardadas al montar el componente
onMounted(async () => {
await fetchRecipes();
await fetchSavedRecipes();
});
</script>
