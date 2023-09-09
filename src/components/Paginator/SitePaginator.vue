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
      selectedPage: parseInt(new URLSearchParams(window.location.search).get("page")) || 1,
      pagesArray: [],
    }
  },

  methods: {
    setSelectedPage(page) {
      if (page != "...") {
        this.selectedPage = page
        history.pushState(null, null, `?page=${page}`);
      }
    },
    setPagesArray() {
      this.pagesArray = []
      const tabSize = 2
      // if at start
      if (this.selectedPage <= this.computePagesAmount-4) {
        for (let i = 1; i <= this.computePagesAmount-3; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.push("...")
        this.pagesArray.push(this.computePagesAmount)
      // If at end
      } else if (this.selectedPage >= this.computePagesAmount-3) {
        for (let i = this.computePagesAmount-4; i <= this.computePagesAmount; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.unshift("...")
        this.pagesArray.unshift(1)
      // If not at start
      } else if (this.selectedPage > this.computePagesAmount-4) {
        for (let i = this.selectedPage-tabSize; i <= this.selectedPage+tabSize; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.unshift("...")  
        this.pagesArray.unshift(1)
        this.pagesArray.push("...")
        this.pagesArray.push(this.computePagesAmount)
      }
    },
    async fetchCharactersList(page) {
      try {
        this.charactersStore.setCharactersList([])
        // replace 'people' with current url
        let response = await fetch("https://swapi.dev/api/"+"people"+"/?page="+page)
        await this.charactersStore.setCharactersList(await response.json())
        await this.setPagesArray()
      } catch(error) {
        console.error("Error while fetching characters list: "+error)
      }
    }
  },

  computed: {
    computePagesAmount() {
      return this.charactersStore.getPagesAmount
    }
  },

  mounted() {
    this.fetchCharactersList(this.selectedPage)
  },

  watch: {
    selectedPage() {
      this.fetchCharactersList(this.selectedPage)
    }
  }
}
</script>

<template>
<div class="paginator__base">
  <paginator__item>
    <img 
      src="../../assets/chevron-left.svg"
      @click="this.selectedPage == 1 ? null : setSelectedPage(this.selectedPage-1)"
      :class="{notclickable: this.selectedPage == 1}"
    />
  </paginator__item>
  <paginator__item
    :href="i=='/?page='+i"
    v-for="i in this.pagesArray"
    :key="i"
    @click="this.selectedPage == i ? null : setSelectedPage(i)"
    :class="{active: this.selectedPage == i}"
  >
    <h6 :class="{notclickable: this.selectedPage == i}"> {{ i }} </h6>
  </paginator__item>
  <paginator__item>
    <img 
      src="../../assets/chevron-right.svg"
      @click="this.selectedPage == 9 ? null : setSelectedPage(this.selectedPage+1)"
      :class="{notclickable: this.selectedPage == 9}"
    /> 
  </paginator__item>
</div>  
</template>

<style scoped lang="scss">
.paginator__base {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 5rem;
  img {
    width: 1.5rem;
    cursor: pointer;
  }
  paginator__item {
    border-radius: var(--border-radius-square);
    text-decoration: none;
    :hover {
      border-radius: var(--border-radius-square);
      transition: background-color 0.4s;
      background-color: var(--secondary-purple); 
    }
    img.notclickable {  
      opacity: 50%;
    }
    img:hover.notclickable {
      background-color: var(--background);
    }
  }
  h6 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    color: var(--text-active);
    text-decoration: none;
    cursor: pointer;
  }
  .notclickable {
    cursor: default;
  }
  .active {
    background-color: var(--primary-purple);
    border-radius: var(--border-radius-square);
    cursor: default;
  }
}
@media (max-width: 768px) {
  .paginator__base {
    img {
      display: none;
    }
    h6 {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
@media (max-width: 320px) {
  .paginator__base {
    gap: 0.5rem;
    img {
      display: none;
    }
    h6 {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
