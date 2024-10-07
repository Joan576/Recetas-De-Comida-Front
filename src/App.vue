<!-- App.vue -->
<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue'; // Asegúrate de importar el MainLayout
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}</style>
