<script setup lang="ts">
defineProps({
  options: {
    type: Array,
    required: true
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
    <select class="font-bold text-black h-10 px-2">
      <option v-for="(option, index) of options" :key="index">{{ option }}</option>
    </select>
  </div>


</template>

<style scoped>

</style>