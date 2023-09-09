<script>
export default {
  data() {
    return {
      urlArray: [{url: "Home"}, {url: "/"}, {url: "Characters"}]
    }
  }
}
</script>


<template>
<div class="breadcrumbs">
  <h5
    v-for="(item, index) in urlArray"
    :key="index"
  >
    {{item.url}}
  </h5>
</div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  width: inherit;
  height: auto;
  display: inline-flex;
  align-items: center;
  color: var(--text-inactive);
  :last-child {
    color: var(--text-active);
  }
  margin-bottom: 5rem;
  @media (max-width: 1280px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 320px) {
    margin-bottom: 3rem;
  }
}
h5 {
  margin: 0 0 0 0.5rem;
}
</style>