<template>
  <div class="flex p-8 flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
    />

    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import axiosClient from "../axiosClient";
import { ref } from "vue";
import { onMounted } from "vue";

const store = useStore();

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
