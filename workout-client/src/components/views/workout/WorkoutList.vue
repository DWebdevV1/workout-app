<script setup lang="ts">
import {useWorkouts} from '../../../composables/use-workouts.ts';
import Workout from '../../helpers/forms/Workout.vue';

const { workouts, workoutsCounter } = useWorkouts();
</script>

<template>
  <h2 class="text-3xl font-bold mb-5">My Workouts ({{ workoutsCounter }})</h2>
  <section class="grid gap-5">
    <Workout v-for="(workout, index) of workouts" :item="workout" :key="index"></Workout>
  </section>
</template>

<style scoped>

</style>