<template>
  <div class="not-found">
    <h1>404 Page not found </h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  a {
    color: var(--primary-purple);
    text-decoration: none;
  }
}
</style>