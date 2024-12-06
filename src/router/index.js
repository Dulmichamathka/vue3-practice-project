import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetter,
  },
  {
    path: "/by-ingredient/:ingredent?",
    name: "byIngredient",
    component: MealsByIngredients,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
