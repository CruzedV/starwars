<script setup>
import HomeCharactersSearch from "./HomeCharactersSearch.vue";
</script>

<template>
<div class="characters-title">
  <h1>Characters</h1>
  <HomeCharactersSearch/>
</div>
</template>

<style scoped lang="scss">
.characters-title {
  align-items: center;
  height: 2.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>