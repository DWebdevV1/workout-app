<script setup lang="ts">
import Header from './components/helpers/header.vue';
</script>

<template>
  <Header></Header>
  <main class="bg-gray-800 text-white min-h-screen h-[calc(100vh-4rem)] p-5">
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
