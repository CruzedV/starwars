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
  <h5> {{ text }}</h5>
</a>
</template>

<style scoped lang="scss">
.header-button {
  cursor: pointer;
  width: 11.5rem;
  height: 5rem;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  color: var(--text-active);
  margin: 0.25rem;
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
