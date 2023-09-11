<script>
export default {
  props: {
    text: String,
    url: String,
  },
}
</script>

<template>
<router-link :to="this.url" class="header__button">
  <h3>{{ text }}</h3>
  <h5> {{ text }}</h5>
</router-link>
</template>

<style scoped lang="scss">
.header__button {
  cursor: pointer;
  text-decoration: none;
  width: 11.5rem;
  height: 5rem;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  color: var(--text-active);
  justify-content: center;
  align-items: center;
  display: flex;
  :hover {
    transition: background-color 0.4s, color 0.4s;
    background: var(--foreground);
    color: var(--text-inactive);
  }
}
h5 {
  width: 100%;
  height: 100%;
  display: none;
}
h3 {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
}
@media (max-width: 1280px) {
  h3 {
    display: none;
  }
  h5 {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .header__button {
    width: 8.5rem;
    height: 3.5rem;
  }
}
@media (max-width: 1100px) {
  .header__button {
    width: 7.5rem;
    height: 2.5rem;
  }
}
@media (max-width: 900px) {
  .header__actions > .header__button {
    display: none;
  }
}
</style>
