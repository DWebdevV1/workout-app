<script setup lang="ts">
import Header from './components/helpers/header.vue';
</script>

<template>
  <Header></Header>
  <main class="bg-gray-800 text-white min-h-screen py-10">
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>

</style>
