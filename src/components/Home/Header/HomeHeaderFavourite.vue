<template>
<button class="header__favourite">
  <img src="../../../assets/bookmark-outline.svg"/>
  <h6 class="header__favourite-amount">
    4
  </h6>
</button>
</template>

<style scoped lang="scss">
.header__favourite {
  width: 7.5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  border-radius: var(--border-radius-rounded);
  border: 1px solid var(--stroke-inactive);
  background-color: var(--background);
  margin: 0.25rem;
  position: relative;
  .header__favourite-amount {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-square);
    color: var(--text-active);
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    margin-bottom: auto;
    margin-left: auto;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--primary-purple);
  }
}
img {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 1280px) {
  .header__favourite {
    height: 3.5rem;
  }
}
@media (max-width: 1100px) {
  .header__favourite {
    width: 3.5rem;
    height: 2.5rem;
  }
}
@media (max-width: 1280px) {
  .header__favourite {
    .header__favourite-amount {
      width: 1rem;
      height: 1rem;
      font-size: 0.75rem;
    }
  }
  
}

</style>
