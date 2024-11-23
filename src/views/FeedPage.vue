<!-- src/views/MiVista.vue -->
<template>
    <div>
      <FeedPage/>
    </div>
    
    
  </template>
  
  <script setup>
import FeedPage from '@/components/FeedPage.vue';
  </script>
  
  <style scoped>
.feed-page {
  background-color: #333333; /* Fondo gris oscuro */
  min-height: 100vh; /* Asegura que cubra toda la ventana */
  padding: 20px; /* Opcional: espacio dentro del contenedor */
  color: #ffffff; /* Para asegurar que el texto sea visible sobre el fondo oscuro */
}
  </style>