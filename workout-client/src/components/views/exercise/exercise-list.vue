<script setup lang="ts">
import useExercises from '../../../composables/exercises.ts';
import Exercise from '../../helpers/Exercise.vue';

const { exercises } = useExercises();
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Exercise v-for="(ex, index) of exercises" :exercise="ex" :key="index"></Exercise>
  </section>
</template>

<style scoped>

</style>