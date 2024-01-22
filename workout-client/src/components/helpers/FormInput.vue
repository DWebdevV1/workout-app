<script setup lang="ts">
defineProps<{
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <label for="id" class="font-bold mb-2">Label</label>
    <input type="text" name="name" id="id" value="" placeholder="placeholder" class="p-2 text-black font-bold">
  </div>
</template>

<style scoped>

</style>