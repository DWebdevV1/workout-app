<script setup lang="ts">
import {Exercise} from '../../types/Exercise';

defineProps<{ exercise: Exercise }>();
</script>

<template>
  <div class="group bg-transparent border-4 border-amber-400 p-5
  hover:cursor-pointer hover:bg-yellow-400 hover:text-black">
    <p class="mb-5 text-right text-sm font-bold italic tracking-widest">{{ exercise.category }}</p>
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-1 h-full">
        <img :src="exercise.image" :alt="exercise.title" class="h-full object-contain" />
      </div>
      <div class="col-span-2">
        <h2 class="mb-5 group-hover:font-bold">{{ exercise.title }}</h2>
        <p>{{ exercise.description }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>