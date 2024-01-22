<script setup lang="ts">
import {useRouter} from 'vue-router';

const props = defineProps<{ title: string; addWorkout?: boolean }>();

const router = useRouter();

const addNewWorkout = () => {
  if (props.addWorkout) {
    router.push({ name: 'Workouts' });
  }
}
</script>

<template>
  <div class="text-2xl font-bold uppercase select-none flex justify-center items-center
    h-36 tracking-wide border-4 border-yellow-400 hover:cursor-pointer"
       :class="[ addWorkout
       ? 'bg-yellow-400 text-black hover:bg-transparent hover:text-white'
       : 'bg-transparent text-white hover:bg-yellow-400 hover:text-black' ]"
       @click="addNewWorkout">
    <h2>{{ addWorkout ? 'Add Workout' : title }}</h2>
  </div>
</template>

<style scoped>

</style>