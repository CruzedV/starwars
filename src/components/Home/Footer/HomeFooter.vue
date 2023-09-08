<script>
import SiteLogo from "../SiteLogo.vue";
export default {
  data() {
    return {
      email: "",
      isValidEmail: true,
    }
  },

  components: {
    SiteLogo,
  },

  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(this.email)) {
        this.isValidEmail = true;
      } else { 
        this.isValidEmail = false;
      }
    },
    sendEmail() {
      alert("We have send an email on adress: "+this.email)
    }
  },

  watch: {
    email() {
      this.validateEmail()
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="footer__logo">
      <SiteLogo/>
    </div>
    <div class="footer__actions">
      <div class="footer__actions-links">
        <div class="footer__actions-col">
          <h3 class="footer__actions-title">Info</h3>
          <a class="footer__actions-link" href="https://www.starwars.com/"><h6>About us</h6></a>
          <a class="footer__actions-link" href="https://disneytermsofuse.com/"><h6>Terms & Conditions</h6></a>
          <a class="footer__actions-link" href="https://twitter.com/starwars"><h6>Social Media</h6></a>
        </div>
        <div class="footer__actions-col">
          <h3 class="footer__actions-title">Extra</h3>
          <a class="footer__actions-link" href="https://www.starwars.com/interactive"><h6>Games</h6></a>
          <a class="footer__actions-link" href="https://www.starwars.com/films"><h6>Movies</h6></a>
          <a class="footer__actions-link" href="https://starwars.fandom.com/wiki/Star_Wars"><h6>Fandom</h6></a>
        </div>
      </div>
      <div class="footer__actions-email">
        <h3>Subscribe for news</h3>
        <h6> Get the latest news from StarWars world</h6>
        <div class="footer__actions-email-input">
          <input
            v-model="email"
            type="text" 
            placeholder="Enter e-email"
          />
          <a 
            class="footer__actions-email-button" 
            @click="(this.isValidEmail & email!='') ? this.sendEmail() : null"
            :class="{notclickable: !(this.isValidEmail & email!='')}"
          >
            <img src="../../../assets/arrow-left.svg">
          </a>
        </div>
        <span v-if="(!this.isValidEmail & email!='')" class="error-message">Invalid email address</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h6 {
  margin: 0;  
  font-weight: 300;
}
.footer {
  display: flex;
  width: inherit;
  height: auto;
  padding: 1.5rem 0;
  border-radius: var(--border-radius-circular);
  background-color: var(--foreground);
  margin-bottom: 2.5rem;
  gap: 22.5%;
  .footer__logo {
    padding-left: 1.5rem;
  }
  .footer__actions {
    width: 100%;
    display: flex;
    gap: 15%;
    margin-right: 8.5%;
    .footer__actions-links {
      display: flex;
      align-items: flex-start;
      gap: 7.5rem;
    }
    .footer__actions-title {
      margin: 0;
      padding-bottom: 0.5rem;
    }
    .footer__actions-col {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      .footer__actions-link {
        white-space: nowrap;  
        text-decoration: none;
        color: var(--text-active);
      }
    }
    .footer__actions-email {
      display: flex;
      flex-direction: column;
    }
    .footer__actions-email-input {
      display: flex;
      align-items: center;
      border: 1px solid var(--stroke-active);
      border-radius: var(--border-radius-square);
      margin-top: 1rem;
      padding-right: 0.5rem;
      gap: 0.5rem;
    }
    .footer__actions-email-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: var(--border-radius-square);
      background-color: var(--primary-purple); 
      cursor: pointer;
      &:hover {
        transition: background-color 0.4s;
        background-color: var(--secondary-purple); 
        border-radius: var(--border-radius-square);
      }
      &.notclickable {
        cursor: default;
        background-color: var(--foreground);
        opacity: 50%;
      }
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    input {
      height: 2.5rem;
      width: 20.25rem;
      padding-left: 0.5rem;
      font-family: "Oxanium", sans-serif;
      font-size: 16px;
      background-color: var(--foreground);
      color: var(--text-inactive);
      border: none;
    }
    @media (max-width: 1600px) {
      input {
        width: 10rem;
      }
    }
  }
}
@media (max-width: 1280px) {
  .footer {
    gap: 5.56rem;
    .footer__actions {
      gap: 7%;
      input {
        width: 100%;
      }
      .footer__actions-links {
        gap: 2.25rem;
      }
    }
  }
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
</style>