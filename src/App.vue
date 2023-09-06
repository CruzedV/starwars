<script setup>
import HomeView from "./views/HomeView.vue"
</script>

<template>
<div class="container-center">
  <HomeView/>
</div>
</template>

<style scoped>
.container-center {
  justify-content: center;
  height: 100%;
  padding: 1rem 5%; 
}
@media (max-width: 1280px) {
  .container-center {
    padding: 1rem 7.5%; 
  } 
}
@media (max-width: 768px) {
  .container-center {
    padding: 1rem 2rem; 
  } 
}
@media (max-width: 320px) {
  .container-center {
    padding: 1rem; 
  } 
}
</style>
