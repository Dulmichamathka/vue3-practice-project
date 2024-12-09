<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(
  () => route.params.letter,
  (letter) => {
    if (letter) {
      store.dispatch("searchMealsByLetter", letter);
    }
  }
);
/*This error appears because the MealsByLetter component tries to fetch meals
 based on route.params.letter, but letter may not be defined initially.*/

onMounted(() => {
  const letter = route.params.letter; // Default to 'A' if no letter is provided
  store.dispatch("searchMealsByLetter", letter);
});
</script>
