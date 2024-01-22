<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="bg-transparent text-3xl text-white font-bold uppercase
      flex justify-center items-center h-52 tracking-wide border-4 border-yellow-400
      hover:cursor-pointer hover:bg-yellow-400 hover:text-black">
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped>

</style>