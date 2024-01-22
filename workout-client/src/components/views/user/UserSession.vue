<script setup lang="ts">
import Session from '../../helpers/Session.vue';
import Workout from '../../helpers/Workout.vue';
</script>

<template>
  <div class="grid gap-20">
    <section>
      <h2 class="text-3xl font-bold mb-5">Sessions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Session title="Day 1"></Session>
        <Session title="Day 2"></Session>
        <Session title="Day 3"></Session>
        <Session title="Day 4"></Session>
        <Session title="Day 5"></Session>
        <Session title="Day 6"></Session>
        <Session title="Day 7"></Session>
      </div>
    </section>

    <div class="border-2 border-b border-white"></div>

    <section>
      <h2 class="text-3xl font-bold mb-5">Workouts</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <Workout title="Workout 1"></Workout>
        <Workout title="Workout 2"></Workout>
        <Workout title="Workout 3"></Workout>
        <Workout title="Workout 4"></Workout>
        <Workout title="Workout 5"></Workout>
        <Workout title="Workout 6"></Workout>
        <Workout title="Workout 7"></Workout>
        <Workout title="Workout 7" add-workout></Workout>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>