<template>

<div class="feed-container">
    <ChefRecommendations />
    <FeedEntradas />
    <FeedPlatosFuertes />
    <FeedPostres />
    <FeedBebidas />
    <TipsCard />
  </div>


   
</template>

<script setup>
import FeedEntradas from '@/components/FeedEntradas.vue';
import FeedPlatosFuertes from '@/components/FeedPlatosFuertes.vue';
import FeedBebidas from '@/components/FeedBebidas.vue';
import FeedPostres from '@/components/FeedPostres.vue';
import ChefRecommendations from '@/components/ChefRecommendations.vue';
import TipsCard from '@/components/TipsCard.vue';

//
</script>



<style scoped>
.feed-container {
  background: #0e0e0e;
  padding: 20px; /* Espaciado general */
  display: flex;
  flex-direction: column;
  border-radius: 5px; /* Bordes redondeados para el contenedor */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);; /* Sombra suave */
}

</style>
s