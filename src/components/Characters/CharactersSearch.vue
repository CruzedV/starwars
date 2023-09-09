<script>
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
      query: "",
    }
  },

  methods: {
    async searchCharacter(query) {
      try {
        this.charactersStore.setCharactersList([])
        let response = await fetch("https://swapi.dev/api/people/?search="+query)
        this.charactersStore.setCharactersList(await response.json())
      } catch(error) {
        console.error("Error while fetching search: ",+error)
      }
    }
  }
}
</script>

<template>
<div class="characters__search">
  <a @click="searchCharacter(this.query)">
    <img src="../../assets/magnify.svg">
  </a>
  <input
    v-model="query"
    type="text" 
    placeholder="Search character..."
  />
</div>
</template>

<style scoped lang="scss">
.characters__search {
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-square);
  border: 1px solid var(--stroke-active);
  a {
    display: flex;
    align-items: center;
    img {
      cursor: pointer;
      padding: 0.5rem 0 0.5rem 0.5rem;
      margin-right: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  input[type="text"] {
    font-family: "Oxanium", sans-serif;
    font-size: 0.875rem;
    height: 2.5rem;
    width: 19.5rem;
    background-color: var(--background);
    color: var(--text-inactive);
    border: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
}

</style>
