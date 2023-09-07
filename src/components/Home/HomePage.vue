<script setup>
import HomeCharacters from "./Characters/HomeCharacters.vue";
import HomeHeader from "./Header/HomeHeader.vue";
import HomeBreadcrumbs from "./HomeBreadcrumbs.vue"
import HomePaginator from "./HomePaginator.vue";
</script>

<template>
  <HomeHeader/>
  <HomeBreadcrumbs/>
  <HomeCharacters/>
  <HomePaginator/>
</template>