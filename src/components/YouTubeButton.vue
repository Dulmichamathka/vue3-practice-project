<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 text-white transition-colors bg-orange-500 border-2 border-orange-600 rounded hover:bg-orange-600"
    ><slot></slot
  ></a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
