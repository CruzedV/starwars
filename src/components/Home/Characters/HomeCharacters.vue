<script>
import HomeCharacterCard from "./HomeCharacterCard.vue";
import HomeCharactersTitle from "./HomeCharactersTitle.vue";
import { useCharactersStore } from "@/stores/characters"
export default {
  setup() {
    const charactersStore = useCharactersStore()
    return {
      charactersStore
    }
  },

  data() {
    return {
      characters: []
    }
  },

  computed: {
    computeCharacters() {
      return this.charactersStore.getCharacters
    },
  },

  components: {
    HomeCharacterCard,
    HomeCharactersTitle,
  },
}
</script>

<template>
<div class="characters">
  <HomeCharactersTitle/>
  <div class="characters-cards">
    <HomeCharacterCard
      v-for="character in computeCharacters"
      :key="character.name"
      :name="character.name"
      :birth_year="character.birth_year"
      :height="character.height"
      :mass="character.mass"
      :hair_color="character.hair_color"
      :skin_color="character.skin_color"
      :eye_color="character.eye_color"
      :films="character.films"
    />
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