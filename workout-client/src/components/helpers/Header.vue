<script setup lang="ts">
import {ref} from 'vue';

const version = ref('1.0');
</script>

<template>
  <header class="p-5 bg-yellow-400 h-[4rem] flex justify-between items-center select-none">
    <router-link :to="{ name: 'Home' }" class="select-none hover:cursor-pointer">
      <h1 class="text-2xl font-bold uppercase">Workout App</h1>
    </router-link>
    <h6 class="font-bold text-sm italic">Version: {{ version }}</h6>
  </header>
</template>

<style scoped>

</style>