<script setup lang="ts">
import useExercises from '../../../composables/exercises.ts';

const { exercises } = useExercises();
</script>

<template>
  <h1>Exercise List works...</h1>
  <ul>
    <li v-for="exercise of exercises">{{ exercise }}</li>
  </ul>
</template>

<style scoped>

</style>