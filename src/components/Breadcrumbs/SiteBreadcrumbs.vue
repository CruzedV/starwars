<script>
export default {
  data() {
    return {
      urlArray: [],
    }
  },

  beforeMount() {
    const segments = window.location.pathname.split("/")
    segments[0] = "/"
    if (segments[1] == "") {
      segments.pop()
    }
    for (let seg in segments) {
      let i = segments[seg]
      // Make first letter of element uppercase 
      this.urlArray.push({url: i})
    }
  }
}
</script>

<template>
<div class="breadcrumbs">
  <a
    v-for="(item, index) in urlArray"
    :key="index"
    :href="item.url"
  >
    <h5>
      {{
      // If element "" make it Home also make first letter capital
      (item.url == "/" ? "Home" : item.url.charAt(0).toUpperCase() + item.url.slice(1))
      // If last element, don't add /
      + (urlArray[urlArray.length - 1].url == item.url ? "" : " /") }}
    </h5>
  </a>
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
  a {
    text-decoration: none;
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