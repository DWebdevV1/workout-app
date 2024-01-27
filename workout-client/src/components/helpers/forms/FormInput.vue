<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" for="id" class="font-bold mb-2">{{ label }}</label>
    <input type="text" name="name" id="id" value="" :placeholder="placeholder" class="px-2 text-black font-bold h-10">
  </div>
</template>

<style scoped>

</style>