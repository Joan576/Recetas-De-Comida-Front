<!-- src/views/MiVista.vue -->
<template>
  <div class="saved-recipes-page">
    <!-- Título principal -->
    <header class="page-header">
      <h1>Recetas Guardadas</h1>
      <p>Aquí puedes ver todas las recetas que has guardado organizadas por categorías. ¡Disfruta cocinando tus platillos favoritos!</p>
    </header>
    

    <!-- Secciones de recetas guardadas -->
    <div class="recipes-sections">
      <EntradasGuardado />
      <PlatosFuertesGuardado />
      <PostresGuardado />
      <BebidasGuardado />
    </div>
  </div>
</template>

<script setup>
import EntradasGuardado from '@/components/EntradasGuardado.vue';
import PlatosFuertesGuardado from '@/components/PlatosFuertesGuardado.vue';
import PostresGuardado from '@/components/PostresGuardado.vue';
import BebidasGuardado from '@/components/BebidasGuardado.vue';
</script>

<style scoped>
/* Estilos para la página */
.saved-recipes-page {
  padding: 20px;
  background-color: #0e0e0e;
  color: #ffffff;
}

/* Estilo del encabezado */
.page-header {
  text-align: center;
  margin-bottom: 30px;
  background-color: #202020;
  border-radius: 10px;
  margin-top: 15px;
  padding-bottom: 15px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #c71010;
  margin-bottom: 10px;
  text-shadow: 0px 1px 5px rgb(0, 0, 0);
}

.page-header p {
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
}

/* Estilo de las secciones */
.recipes-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
