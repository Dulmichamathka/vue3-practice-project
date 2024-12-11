<template>
  <header class="flex justify-between h-16 bg-gray-200 shadow">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-3 font-bold text-orange-600 transition-color custom-size custom-radious"
      style="font-size: 28px"
      >FoodHouse<i class="ml-2 fas fa-utensils"></i
    ></router-link>

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 font-bold text-orange-600 border-r-4 transition-color hover:bg-gray-300 custom-radious custom-size"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 font-bold text-orange-600 transition-color hover:bg-gray-300 custom-radious custom-size"
        >Meals by Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 font-bold text-orange-600 transition-color hover:bg-gray-300 custom-radious custom-size"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>

<style>
.custom-shadow {
  text-shadow: 0 0 10px #f97316;
  font-size: 30px;
}
.custom-radious {
  border-radius: 10px;
}

.custom-size {
  font-size: 20px;
  font-family: cursive;
}
</style>
