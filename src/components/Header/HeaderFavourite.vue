<script>
import { useCharactersStore } from "@/stores/characters"

export default {
  setup() {
    const charactersStore = useCharactersStore()
    return {
      charactersStore
    }
  },

  methods: {
    setFavourite() {
      try {
        this.charactersStore.setCharacters(this.charactersStore.getFavourite)
      } catch(error) {
        console.error("Error loading favourites")
      }
    }
  },
  
  computed: {
    favouriteAmount() {
      return this.charactersStore.getFavouriteAmount
    }
  }
}
</script>

<template>
<a href="/starwars/characters?favourite" @click="favouriteAmount > 0 ? this.setFavourite() : null" class="header__favourite">
  <img src="../../assets/bookmark-outline.svg"/>
  <h6 
    class="header__favourite-amount"
    v-if="favouriteAmount > 0"
  >
    {{ favouriteAmount }}
  </h6>
</a>
</template>

<style scoped lang="scss">
.header__favourite {
  cursor: pointer;
  width: 7.5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  background-color: var(--background);
  margin: 0.25rem;
  position: relative;
  &:hover {
    transition: background-color 0.4s, color 0.4s;
    background: var(--foreground);
    color: var(--text-inactive);
  }
  .header__favourite-amount {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-square);
    color: var(--text-active);
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    margin-bottom: auto;
    margin-left: auto;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--primary-purple);
  }
}
img {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 1280px) {
  .header__favourite {
    height: 3.5rem;
  }
}
@media (max-width: 1100px) {
  .header__favourite {
    width: 3.5rem;
    height: 2.5rem;
  }
}
@media (max-width: 1280px) {
  .header__favourite {
    .header__favourite-amount {
      width: 1rem;
      height: 1rem;
      font-size: 0.75rem;
    }
  }
  
}

</style>
