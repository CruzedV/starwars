<script>
export default {
  data() {
    return {
      selectedPage: parseInt(new URLSearchParams(window.location.search).get('page')) || 1,
      pagesArray: [],
    }
  },

  methods: {
    setSelectedPage(page) {
      if (page != "...") {
        this.selectedPage = page
        window.location.href = '/?page='+page
      }
    },
    // False if left, true if right
    setPagesArray() {
      // if at start
      if (this.selectedPage <= 5) {
        for (let i = 1; i <= 7; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.push("...")
        this.pagesArray.push(21)
      // If at end
      } else if (this.selectedPage >= 17) {
        for (let i = 15; i <= 21; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.unshift("...")
        this.pagesArray.unshift(1)
      // If not at start
      } else if (this.selectedPage > 5) {
        for (let i = this.selectedPage-3; i <= this.selectedPage+3; i++) {
          this.pagesArray.push(i)
        }
        this.pagesArray.unshift("...")
        this.pagesArray.unshift(1)
        this.pagesArray.push("...")
        this.pagesArray.push(21)
      } 
    }
  },

  mounted() {
    this.setPagesArray()
  },
}
</script>

<template>
<div class="paginator-base">
  <item>
    <img 
      src="../../assets/chevron-left.svg"
      @click="this.selectedPage == 1 ? null : setSelectedPage(this.selectedPage-1)"
      :class="{notclickable: this.selectedPage == 1}"
    />
  </item>
  <item
    :href="i=='/?page='+i"
    v-for="i in this.pagesArray"
    :key="i"
    @click="this.selectedPage == i ? null : setSelectedPage(i)"
    :class="{active: this.selectedPage == i}"
  >
    <h6 :class="{notclickable: this.selectedPage == i}"> {{ i }} </h6>
  </item>
  <item>
    <img 
      src="../../assets/chevron-right.svg"
      @click="this.selectedPage == 21 ? null : setSelectedPage(this.selectedPage+1)"
      :class="{notclickable: this.selectedPage == 21}"
    />
  </item>
</div>  
</template>

<style scoped lang="scss">
.paginator-base {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  margin-bottom: 5rem;
  img {
    width: 1.5rem;
    cursor: pointer;
  }
  item {
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
</style>
