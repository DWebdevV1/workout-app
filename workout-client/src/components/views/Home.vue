<script setup lang="ts">
import Card from '../helpers/Card.vue';
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
    <Card title="Create workout program" target="Workouts"></Card>
    <Card title="My Sessions" target="UserSession"></Card>

    <Card title="Explore Exercises" target="Exercises"></Card>
    <Card title="My Profile" target="UserProfile"></Card>
  </section>
</template>

<style scoped>

</style>