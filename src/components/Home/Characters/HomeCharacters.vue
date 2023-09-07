<script setup>
import HomeCharacterCard from "./HomeCharacterCard.vue";
import HomeCharactersTitle from "./HomeCharactersTitle.vue";
</script>

<template>
<div class="characters">
  <HomeCharactersTitle/>
  <div class="characters-cards">
    <HomeCharacterCard/>
    <HomeCharacterCard/>
    <HomeCharacterCard/>
    <HomeCharacterCard/>
  </div>
</div>
</template>

<style scoped lang="scss">
.characters {
  height: inherit;
  margin-bottom: 5rem;
}
.characters-cards {
  gap: 2rem;
  width: 100%;
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1280px) {
    gap: 3rem 1.25rem;
  }
  @media (max-width: 550px) {
    gap: 1.25rem;
    grid-template-columns: 1fr;
  }
}
</style>