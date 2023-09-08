<script setup>
import SiteLogo from "../SiteLogo.vue";
import HomeHeaderButton from "./HomeHeaderButton.vue";
import HomeHeaderFavourite from "./HomeHeaderFavourite.vue"
import HomeHeaderMenu from "./HomeHeaderMenu.vue";
</script>

<template>
<div class="header">
  <SiteLogo/>
  <div class="header-actions">
    <HomeHeaderButton text="Home" url="/"/>
    <HomeHeaderButton text="News" url="https://www.starwars.com/news"/>
    <HomeHeaderButton text="Gallery" url="https://www.starwars.com/databank"/>
    <HomeHeaderButton text="Forum" url="https://www.starwars.com"/>
    <HomeHeaderMenu/>
    <HomeHeaderFavourite/>
  </div>
</div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  width: inherit;
  height: auto;
  padding: 0 0.25rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--stroke-active);
  border-radius: var(--border-radius-circular);
  background-color: var(--background);
  margin-bottom: 2.25rem;
}
.header-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1280px) {
  .header {
    margin-bottom: 1.5rem;
  }
}
</style>