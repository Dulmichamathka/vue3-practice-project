<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredeint);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
