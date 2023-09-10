<script setup>
import SiteLogo from "../Logo/SiteLogo.vue";
import HeaderButton from "./HeaderButton.vue";
import HeaderFavourite from "./HeaderFavourite.vue"
import HeaderMenu from "./HeaderMenu.vue";
</script>

<template>
<div class="header">
  <SiteLogo/>
  <div class="header__actions">
    <HeaderButton text="Home" url="/"/>
    <HeaderButton text="News" url="/news"/>
    <HeaderButton text="Characters" url="/characters"/>
    <HeaderButton text="Forum" url="/forum"/>
    <HeaderMenu/>
    <HeaderFavourite/>
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
.header__actions {
  gap: 0.25rem;
  margin: 0.25rem 0;
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