<template>
  <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-3">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There is no meals
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
