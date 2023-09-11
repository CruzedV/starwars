<script>
import { useCharactersStore } from "@/stores/characters"

export default {
  setup() {
    const charactersStore = useCharactersStore()
    return {
      charactersStore
    }
  },

  props: {
    name: String,
    birth_year: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    films: Array,
  },

  methods: {
    closeDetails() {
      this.$emit("close-window")
    },
    addToFavourite() {
      const characterData = {
        name: this.name,
        birth_year: this.birth_year,
        height: this.height,
        mass: this.mass,
        hair_color: this.hair_color,
        skin_color: this.skin_color,
        eye_color: this.eye_color,
        films: this.films,
      };
      let favourites = JSON.parse(localStorage.getItem("favourites"))
      const existingCharacterIndex = favourites.findIndex(item => item.name === this.name)
      if (existingCharacterIndex !== -1) {
        favourites.splice(existingCharacterIndex, 1);
      } else {
        favourites.push(characterData);
      }
      localStorage.setItem("favourites", JSON.stringify(favourites))
      this.charactersStore.updateFavourite()
    }
  },

  computed: {
    isFavourite() {
      return this.charactersStore.checkIsFavourite(this.name)
    }
  }
}
</script>

<template>
<div class="character__details-base">
  <img 
    src="../../assets/example-picture.jpg" 
    class="character__details-image"
  >
  <div class="character__details-info">
    <h1 class="character__details-title">
      {{ name }}
    </h1>
    <div class="character__details-stats">
      <div class="character__details-field">
        <h3>Birth year:</h3>
        <h3>Height:</h3>
        <h3>Mass:</h3>
        <h3>Hair color:</h3>
        <h3>Skin color:</h3>
        <h3>Eye color:</h3>
        <h3>Films:</h3>
      </div>
      <div class="character__details-field">
        <h3> {{birth_year}} </h3>
        <h3> {{height}} </h3>
        <h3> {{mass}} </h3>
        <h3> {{hair_color}} </h3>
        <h3> {{skin_color}} </h3>
        <h3> {{eye_color}} </h3>
        <h3
          v-for="(film, index) in films"
          :key="index"
        > 
          {{ film }} 
        </h3>
      </div>
    </div>
    <h5
      @click="addToFavourite()"
      v-if="isFavourite"
    >
      Add to Favourite
      <img 
        src="../../assets/bookmark-outline.svg"
        class="character__details-bookmark"
      >
    </h5>
    <h5
      @click="addToFavourite()"
      v-else
    >
      Remove from Favourite
      <img 
        src="../../assets/bookmark-outline.svg"
        class="character__details-bookmark"
      >
    </h5>
  </div>
  <img
    src="../../assets/close.svg"
    class="character__details-close"
    @click="closeDetails()"
  >
</div>
</template>

<style scoped lang="scss">
.character__details-base {
  position: relative;
  display: flex;
  width: 76.75rem;
  background-color: var(--foreground);
  border-radius: var(--border-radius-circular); 
  justify-content: center;
  align-items: center;
  z-index: 999;
  h5 {
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-circular);
    width: 14.5rem;
    height: 3rem;
    background-color: var(--primary-purple);
    margin: 0;
    gap: 5%;
    .character__details-bookmark {
      width: 1.5rem;
      height: 1.5rem;
    }
    &:hover {
      transition: background-color 0.4s;
      background-color: var(--secondary-purple);  
      border-radius: var(--border-radius-circular);
    }
  }
  .character__details-info {
    width: 100%;
    margin: 3.75% 2.5rem 8.5% 38.5rem;
    .character__details-title {
      margin: 0;
      margin-bottom: 2.25rem;
    }
    .character__details-stats {
      gap: 5%;
      display: inline-flex;
      justify-content: space-between;
      margin-bottom: 3rem;
      .character__details-field {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        h3 {
          white-space: nowrap;
          font-weight: 500;
          margin: 0;
          @media (max-height: 800px) {
            font-size: 80%;
          }
        }
      }
    }
  }
  .character__details-image {
    position: absolute;
    top: -3rem;
    margin-bottom: auto;
    left: 3.5rem;
    width: 31.75rem;
    border-radius: var(--border-radius-circular);
  }
  .character__details-close {
    margin-left: auto;
    right: 2.5%;
    margin-bottom: auto;
    top: 2.5%;
    cursor: pointer;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
  }
}
@media (max-width: 1280px) {
  .character__details-base {
    width: 57.5rem;
    .character__details-image {
      width: 18.75rem;
      height: 25rem;
      left: 3rem;
      top: -3rem;
    }
    .character__details-info {
      width: 100%;
      margin: 3.75rem 3rem 3rem 23rem;
    }
    .character__details-close {
      right: 1.5rem;
      top: 1.5rem;
    }
  }
}
@media (max-width: 1024px) {
  .character__details-base {
    width: 37.75rem;
    height: 80%;
    .character__details-image {
      width: 13.75rem;
      height: 17.5rem;
      @media (max-height: 900px) {
        right: 3rem;
        left: 0;
        margin-left: auto;
      }
    }
    .character__details-field {
      h3 {
        font-size: 90%;
      }
    }
    .character__details-info {
      width: 70%;
      margin: 0;
      left: 3rem;
      position: absolute;
      bottom: 2rem;
      .character__details-title {
        font-size: 90%;
        font-weight: 600;
      }
    }
  }
}
@media (max-width: 768px) {
  .character__details-base {
    width: 70%;
    height: 83%;
    .character__details-image {
      width: 15.25rem;
      height: 19rem;
      top: -3rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      @media (max-height: 1000px) {
        right: 3rem;
        margin-left: auto;
        margin-right: 0;
        @media (max-width: 720px) {
          width: 30%;
          height: 40%;
        }
      }
    }
    .character__details-info {
      width: 60%;
      
    }
    
  }
}
@media (max-width: 530px) {
  .character__details-base {
    width: 80%;
    height: 29rem;
    h5 {
      font-weight: 300;
      width: 13rem;
      height: 2.25rem;
    }
    .character__details-image {
      width: 8rem;
      height: 10.75rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }
    .character__details-info {
      left: 1rem;
      .character__details-stats {
        .character__details-field {
          gap: 2%;
          h3 {
            font-size: 8px;
          }
        }
      }
    }
  }
}
</style>