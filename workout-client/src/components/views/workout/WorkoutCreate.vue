<script setup lang="ts">
import FormInput from '../../helpers/FormInput.vue';
</script>

<template>
  <h2 class="text-3xl font-bold mb-5">Create Workout</h2>
  <form class="mt-5 grid gap-10 grid-cols-2">
    <FormInput label="Title"></FormInput>
    <FormInput label="Description"></FormInput>
    <FormInput></FormInput>
    <FormInput></FormInput>
    <FormInput></FormInput>
  </form>

</template>

<style scoped>

</style>