<template>
<button class="header-favourite">
  <img src="../../../assets/bookmark-outline.svg"/>
</button>
</template>

<style scoped lang="scss">
.header-favourite {
  width: 7.5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  background-color: var(--background);
  margin: 0.25rem;
}
img {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 1280px) {
  .header-favourite {
    height: 3.5rem;
  }
}
@media (max-width: 1100px) {
  .header-favourite {
    width: 3.5rem;
    height: 2.5rem;
  }
}

</style>
