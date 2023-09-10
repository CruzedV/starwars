import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CharacterView from "../views/CharactersView.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  BASE_URL: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters",
      name: "characters",
      component: CharacterView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ]
})

export default router
