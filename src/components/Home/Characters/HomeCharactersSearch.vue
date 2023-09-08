<script>
export default {
  data() {
    return {
      query: "",
    }
  },

  methods: {
    async searchCharacter(query) {
      //Make req logic
      // Example request: "https://swapi.dev/api/people/?search="+query
    }
  }
}
</script>

<template>
<div class="search-field">
  <a @click="searchCharacter(this.query)">
    <img src="../../../assets/magnify.svg">
  </a>
  <input
    v-model="query"
    type="text" 
    placeholder="Search character..."
  />
</div>
</template>

<style scoped lang="scss">
.search-field {
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
    font-size: 16px;
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
