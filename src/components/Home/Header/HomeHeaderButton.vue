<script>
export default {
  props: {
    text: String,
    url: String,
  },

  methods: {
    redirectToUrl() {
      window.location.href = this.url
    }
  }
}
</script>

<template>
<a @click="redirectToUrl" class="header-button">
  <h3>{{ text }}</h3>
  <h4> {{ text }}</h4>
</a>
</template>

<style scoped lang="scss">
.header-button {
  width: 11.5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  background-color: var(--background);
  color: var(--text-active);
  margin: 0.25rem;
  :hover {
    transition: background-color 0.4s, color 0.4s;
    background: var(--foreground);
    color: var(--text-inactive);
  }
}
h4 {
  display: none;
}
@media (max-width: 1280px) {
  h3 {
    display: none;
  }
  h4 {
    display: block;
  }
  .header-button {
    width: 8.5rem;
    height: 3.5rem;
  }
}
@media (max-width: 1024px) {
  .header-button {
    width: 7.5rem;
    height: 2.5rem;
  }
}
@media (max-width: 840px) {
  .header-button {
    display: none;
  }
}
</style>
