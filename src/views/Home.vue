<template>
  <div class="pt-5 pl-3">
    <h1 class="rondom">Random Meals</h1>
  </div>
  <div class="pb-8">
    <Meals :meals="ingredients.meals" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import axiosClient from "../axiosClient";
import { ref } from "vue";
import { onMounted } from "vue";
import Meals from "../components/Meals.vue";

const store = useStore();

const ingredients = ref({ meals: [] });

onMounted(async () => {
  const response = await axiosClient.get("random.php");
  console.log(response.data);
  if (response.data && response.data.meals) {
    const singleMeal = response.data.meals[0];
    ingredients.value.meals = Array(15).fill(singleMeal);
  }
});
</script>

<style>
.rondom {
  text-shadow: 0 0 15px #f97316;
  color: #f97316;
  font-size: 25px !important;
  font-weight: bold;
  font-family: cursive;
}
</style>
