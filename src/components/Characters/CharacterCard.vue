<script>
import CharacterDetails from './CharacterDetails.vue'
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

  data() {
    return {
      showInfo: false,
    }
  },

  components: {
    CharacterDetails
  },

  methods: {
    showDetails() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<template>
<div class="character__card-base">
  <div class="character__card-background">
    <img src="../../assets/example-picture.jpg">
    <div class="character__card-info">
      <h2>
        {{ name }}
      </h2>
      <h5 @click="showDetails()">Learn more</h5>
    </div>
  </div>
</div>
<div v-if="showInfo" class="character__details-overlay">
  <CharacterDetails
    :name="this.name"
    :birth_year="this.birth_year"
    :height="this.height"
    :mass="this.mass"
    :hair_color="this.hair_color"
    :skin_color="this.skin_color"
    :eye_color="this.eye_color"
    :films="this.films"
    @close-window="showDetails()"
  />
</div>
</template>

<style scoped lang="scss">
.character__details-overlay {
  z-index: 888;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // Background color
  background-color: rgba(28, 28, 30, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.character__card-base {
  width: 100%;
  .character__card-background {
    background-color: var(--foreground);
    border-radius: var(--border-radius-circular);
    border: 1px solid var(--stroke-active);
    position: relative;
    margin-top: 3rem;
    height: 25rem;
    img {
      position: absolute;
      top: -3rem;
      margin-bottom: auto;
      left: 2.5rem;
      width: 18.75rem;
      height: 25rem;
      border-radius: var(--border-radius-circular);
    }
  }
  .character__card-info {
    margin: 2.5rem 2.5rem 3rem 22.75rem;
    h5 {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--border-radius-circular);
      width: 65%;
      height: 3rem; 
      background-color: var(--primary-purple);
      margin: 0;
      &:hover {
        transition: background-color 0.4s;
        background-color: var(--secondary-purple);  
        border-radius: var(--border-radius-circular);
      }
    }
    h2 {
      margin-bottom: 2rem;
    }
  }
}
@media (max-width: 1280px) {
  .character__card-base {
    height: 37.25rem;
    .character__card-background {
      height: 33.25rem;
      img {
        top: -3rem;
        margin-bottom: auto;
      }
    }
    .character__card-info {
      margin: 23.25rem 10.625rem 3rem 2.5rem;
      h5 {
        width: 12.5rem;
      }
    }
  }
}
@media (max-width: 1024px) {
  .character__card-base {
    height: 32.75rem;
    .character__card-background {
      height: 29.25rem;
      img {
        width: 15.25rem;
        height: 20.5rem;
        top: -3rem;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
    }
    .character__card-info {
      width: 15.25rem;
      position: absolute;
      margin: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 3rem;
      h5 {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .character__card-base {
    height: 28.125rem;
    .character__card-background {
      height: 25.125rem;
      img {
        width: 12.5rem;
        height: 70%;
      }
    }
    .character__card-info {
      width: 12.5rem;
    }
  }
}
@media (max-width: 550px) {
  .character__card-base {
    height: 26.1875rem;
    .character__card-background {
      height: 22.4375rem;
      img {
        width: 10.625rem;
        height: 14.1875rem;
        top: -3rem;
        margin-bottom: auto;
      }
    }
    .character__card-info {
      width: 10.625rem;
      bottom: 4rem;
    }
  }
}
</style>