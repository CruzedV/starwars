<script>
import HeaderButton from "./HeaderButton.vue"
export default {
  data() {
    return {
      isMenu: false,
    }
  },

  methods: {
    showMenu() {
      this.isMenu = !this.isMenu
    },
  },

  components: {
    HeaderButton
  }
}
</script>

<template>
<a class="header__menu"  @click="this.showMenu">
  <img src="../../assets/menu.svg"/>
  <h5> Menu </h5>
  <div v-if="this.isMenu" class="header__menu-dropdown">
    <div class="header__menu-item">
      <HeaderButton text="Home" url="/starwars"/>
    </div>
    <div class="header__menu-item">
      <HeaderButton text="News" url="/starwars/news"/>
    </div>
    <div class="header__menu-item">
      <HeaderButton text="Characters" url="/starwars/characters"/>
    </div>
    <div class="header__menu-item">
      <HeaderButton text="Forum" url="/starwars/forum"/>
    </div>
  </div>
</a>
</template>

<style scoped lang="scss">
.header__menu {
  position: relative;
  justify-content: center;
  align-items: center;
  display: none;
  width: 9.5rem;
  height: 2.5rem;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  background-color: var(--background);
  color: var(--text-active);
  margin: 0.25rem;
  &:hover {
    cursor: pointer;
    transition: background-color 0.4s;
    background-color: var(--foreground);
    border-radius: var(--border-radius-rounded);
  }
  .header__menu-dropdown {
    padding: 1rem 0;
    z-index: 1;
    top: 3rem;
    position: absolute;
    width: 100%;
    background-color: var(--background);
    border-radius: var(--border-radius-rounded);
    border: 1px solid var(--stroke-active);
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  .header__menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 100%;
  }
}
h5 {
  width: 5.5rem;
  justify-content: center;
  display: flex;
}
img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
@media (max-width: 900px) {
  .header__menu {
    display: inline-flex;
  }
}
@media (max-width: 460px) {
  .header__menu {
    width: 3.5rem;
  }
  img {
    margin-right: 0;
  }
  h5 {
    display: none;
  }
}
</style>
