<script setup>
import HomeCharactersTitle from "./HomeCharactersTitle.vue";
</script>

<template>
<div class="characters">
  <HomeCharactersTitle/>
  <div class="characters-cards">

  </div>
</div>
</template>

<style scoped lang="scss">
.characters {
  display: flex;
  height: inherit;
  justify-content: space-between;
  margin-bottom: 5rem;
}
.characters-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4.5rem 0;
}
</style>