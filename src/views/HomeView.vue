<script setup>
import SiteFooter from "@/components/Footer/SiteFooter.vue"
import SiteHeader from "@/components/Header/SiteHeader.vue"
import SiteBreadcrumbs from "@/components/Breadcrumbs/SiteBreadcrumbs.vue"
</script>

<template>
  <main>
    <SiteHeader/>
    <SiteBreadcrumbs/>
    <div class="home">
      Начальная страница, макет в "Characters"
    </div>
    <SiteFooter/>
  </main>
</template>

<style scoped>
.home {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
