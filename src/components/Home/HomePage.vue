<script setup>
import HomeCharacters from "./Characters/HomeCharacters.vue";
import HomeHeader from "./Header/HomeHeader.vue";
import HomeBreadcrumbs from "./HomeBreadcrumbs.vue"
import HomePaginator from "./HomePaginator.vue";
import HomeFooter from "./Footer/HomeFooter.vue"
</script>

<template>
  <HomeHeader/>
  <HomeBreadcrumbs/>
  <HomeCharacters/>
  <HomePaginator/>
  <HomeFooter/>
</template>