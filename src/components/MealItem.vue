<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="object-cover w-full h-48 rounded-t-xl"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni,
        repellendus eligendi porro culpa soluta suscipit mollitia nesciunt
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton v-if="meal.strYoutube" :href="meal.strYoutube"
          >You Tube</YouTubeButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
