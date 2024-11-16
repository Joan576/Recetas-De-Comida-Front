<template>
  <div>
    <FeedEntradas class="feed-section" />
    <FeedBebidas class="feed-section" />
   
  </div>
</template>

<script setup>
import FeedEntradas from '@/components/FeedEntradas.vue';
import FeedBebidas from '@/components/FeedBebidas.vue';
//
</script>

<style scoped>
.feed-section {
  margin-bottom: 10px; /* Espacio entre secciones */
}

</style>
