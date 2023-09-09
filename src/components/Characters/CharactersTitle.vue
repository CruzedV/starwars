<script setup>
import CharactersSearch from "./CharactersSearch.vue";
</script>

<template>
<div class="characters__title">
  <h1>Characters</h1>
  <CharactersSearch/>
</div>
</template>

<style scoped lang="scss">
.characters__title {
  align-items: center;
  height: 2.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4.5rem;
}
</style>