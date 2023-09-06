<script>
export default {
}
</script>

<template>
<a class="header-menu">
  <img src="../../../assets/menu.svg"/>
  <h4>Menu</h4>
</a>
</template>

<style scoped lang="scss">
.header-menu {
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
}
h4 {
  width: 5.5rem;
  justify-content: center;
  display: flex;
}
img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
@media (max-width: 840px) {
  .header-menu {
    display: inline-flex;
  }
}
@media (max-width: 460px) {
  .header-menu {
    width: 3.5rem;
  }
  img {
    margin-right: 0;
  }
  h4 {
    display: none;
  }
}
</style>
