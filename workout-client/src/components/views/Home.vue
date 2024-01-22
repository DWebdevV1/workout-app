<script setup lang="ts">
import Card from '../helpers/Card.vue';
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
    <Card title="My Sessions" target="UserSession"></Card>
    <Card title="Create workout program" target="Workouts"></Card>

    <Card title="My Profile" target="UserProfile"></Card>
    <Card title="Explore Exercises" target="Exercises"></Card>
  </section>
</template>

<style scoped>

</style>