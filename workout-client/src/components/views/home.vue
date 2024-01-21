<script setup lang="ts">
import Card from '../helpers/card.vue';
</script>

<template>
  <section class="grid grid-cols-2 grid-rows-3 gap-5 h-full">
    <Card title="Create workout program" target="Workouts"></Card>
    <Card title="Explore Exercises" target="Exercises"></Card>

    <Card title="See Profile" target="UserProfile"></Card>
    <Card title="About Us"></Card>

    <Card title="Contact"></Card>
    <Card title="Help"></Card>
  </section>
</template>

<style scoped>

</style>