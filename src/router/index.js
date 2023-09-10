import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CharacterView from "../views/CharactersView.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CharacterView,
    },
    {
      path: "/characters/:pathMatch(.*)*",
      name: "characters",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ]
})

export default router
