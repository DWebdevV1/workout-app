<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  target: { type: String, required: false }
});
</script>

<template>
  <router-link :to="{ name: target ? target : null }">
    <div class="bg-transparent text-3xl text-white font-bold uppercase
      flex justify-center items-center h-full tracking-wide border-4 border-yellow-400
      hover:cursor-pointer hover:bg-yellow-400 hover:text-black">
      <h2>{{ title }}</h2>
    </div>
  </router-link>
</template>

<style scoped>

</style>