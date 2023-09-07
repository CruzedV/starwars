<script>
export default {
  data() {
    return {
      name: "Darth Wader",
      birth_year: "",
      height: "",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      films: [],
    }
  },
}
</script>


<template>
<div class="card-base">
  <div class="card-background">
    <img src="../../../assets/example-picture.jpg">
    <div class="card-info">
      <h2>
        {{ name }}
      </h2>
      <h5>Learn more</h5>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.card-base {
  width: 100%;
  .card-background {
    background-color: var(--foreground);
    border-radius: var(--border-radius-circular);
    border: 1px solid var(--stroke-active);
    position: relative;
    margin-top: 3rem;
    height: 25rem;
    img {
      position: absolute;
      bottom: 3rem;
      left: 2.5rem;
      width: 18.75rem;
      height: 25rem;
      border-radius: var(--border-radius-circular);
    }
  }
  .card-info {
    margin: 2.5rem 2.5rem 3rem 22.75rem;
      h5 {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--border-radius-circular);
      width: 65%;
      height: 3rem; 
      background-color: var(--primary-purple);
      margin: 0;
    }
    h2 {
      margin-bottom: 2rem;
    }
  }
}
@media (max-width: 1280px) {
  .card-base {
    height: 37.25rem;
    .card-background {
      height: 33.25rem;
      img {
        bottom: 12.25rem;
      }
    }
    .card-info {
      margin: 23.25rem 10.625rem 3rem 2.5rem;
      h5 {
        width: 12.5rem;
      }
    }
  }
}
@media (max-width: 1024px) {
  .card-base {
    height: 32.75rem;
    .card-background {
      height: 29.25rem;
      img {
        width: 15.25rem;
        height: 20.5rem;
        bottom: 11rem;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
    }
    .card-info {
      width: 15.25rem;
      position: absolute;
      margin: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 3rem;
      h5 {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .card-base {
    height: 28.125rem;
    .card-background {
      height: 25.125rem;
      img {
        width: 12.5rem;
        height: 70%;
      }
    }
    .card-info {
      width: 12.5rem;
    }
  }
}
@media (max-width: 550px) {
  .card-base {
    height: 26.1875rem;
    .card-background {
      height: 22.4375rem;
      img {
        width: 10.625rem;
        height: 14.1875rem;
        bottom: 12rem;
      }
    }
    .card-info {
      width: 10.625rem;
      bottom: 4rem;
    }
  }
}
</style>