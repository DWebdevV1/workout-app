<script setup lang="ts">
import {Workout} from '../../../types/Workout';

defineProps<{ item: Workout }>();

</script>

<template>
  <div class="flex flex-col gap-3 border-2 border-amber-400 p-5 w-100
  hover:cursor-pointer hover:bg-yellow-400 hover:text-black">
    <h1 class="flex justify-between">
      <span class="font-bold text-xl mr-2">{{ item.name }}</span>
      <span class="text-sm">{{ item.createdAt }}</span>
    </h1>

    <p>{{ item.description }}</p>

    <div class="flex gap-5">
      <img v-for="exercise of item.exercises"
           :src="exercise.image"
           :alt="exercise.title"
           class="w-32 h-32 object-cover" />
    </div>
  </div>
</template>

<style scoped>

</style>