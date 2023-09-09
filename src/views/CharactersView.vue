<script setup>
import SiteBreadcrumbs from "@/components/Breadcrumbs/SiteBreadcrumbs.vue"
import SiteCharacters from "@/components/Characters/SiteCharacters.vue"
import SiteFooter from "@/components/Footer/SiteFooter.vue"
import SiteHeader from "@/components/Header/SiteHeader.vue"
import SitePaginator from "@/components/Paginator/SitePaginator.vue"
</script>

<template>
  <main>
    <SiteHeader/>
    <SiteBreadcrumbs/>
    <SiteCharacters/>
    <SitePaginator/>
    <SiteFooter/>
  </main>
</template>
