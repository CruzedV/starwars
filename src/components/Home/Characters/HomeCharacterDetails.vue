<script>
export default {
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
      // Logic to add to localStorage and pinia
    }
  }
}
</script>

<template>
<div class="character__details-base">
  <img 
    src="../../../assets/example-picture.jpg" 
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
          {{films}} 
        </h3>
      </div>
    </div>
    <h5
      @click="addToFavourite()"
    >
      Add to Favourite
      <img 
        src="../../../assets/bookmark-outline.svg"
        class="character__details-bookmark"
      >
    </h5>
  </div>
  <img
    src="../../../assets/close.svg"
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
  height: 42.25rem;
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
    gap: 1.5rem;
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
    margin: 3.75rem 2.5rem 8.5rem 38.5rem;
    .character__details-title {
      margin: 0;
      margin-bottom: 2.25rem;
    }
    .character__details-stats {
      gap: 0.5rem;
      display: inline-flex;
      justify-content: space-between;
      margin-bottom: 3rem;
      .character__details-field {
        gap: 0.75rem;
        display: flex;
        flex-direction: column;
        h3 {
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }
  .character__details-image {
    position: absolute;
    bottom: 3rem;
    left: 3.5rem;
    width: 31.75rem;
    height: 42.25rem;
    border-radius: var(--border-radius-circular);
  }
  .character__details-close {
    margin-left: auto;
    right: 2.5rem;
    margin-bottom: auto;
    top: 2.5rem;
    cursor: pointer;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
  }
}
@media (max-width: 1280px) {
  .character__details-base {
    width: 57.5rem;
    height: 34.125rem;
    .character__details-image {
      width: 18.75rem;
      height: 25rem;
      left: 3rem;
      top: -3rem;
    }
    .character__details-info {
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
    height: 46.25rem;
    .character__details-image {
      width: 13.75rem;
      height: 17.5rem;
    }
    .character__details-info {
      margin: 0;
      left: 3rem;
      position: absolute;
      bottom: 3rem;
      .character__details-title {
        font-weight: 600;
      }
    }
  }
}
@media (max-width: 768px) {
  .character__details-base {
    width: 90%;
    height: 44.0625rem;
    .character__details-image {
      width: 15.25rem;
      height: 19rem;
      top: -4.5rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }
    .character__details-info {
      .character__details-title {
        font-size: 1rem;
      }
      .character__details-stats {
        .character__details-field {
          h3 {
            font-size: 1rem;
          }
        }
      }
      
    }
    
  }
}
@media (max-width: 320px) {
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
    }
    .character__details-info {
      left: 1rem;
      .character__details-stats {
        .character__details-field {
          gap: 0.2rem;
          h3 {
            font-size: 8px;
          }
        }
      }
    }
  }
}
</style>
