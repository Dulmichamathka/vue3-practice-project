<template>
  <div class="p-8">
    <h1 class="mb-4 text-4xl font-bold">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="w-full mb-3 bg-white border-2 border-gray-200 rounded"
      placeholder="Search for Ingredients"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient in computedIngredients"
      :key="ingredient.idIngredient"
      class="block p-3 mb-3 bg-white rounded shadow"
    >
      <h3 class="mb-3 text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient";
import { computed } from "vue";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
