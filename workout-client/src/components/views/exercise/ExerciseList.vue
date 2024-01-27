<script setup lang="ts">
import useExercises from '../../../composables/exercises.ts';
import Exercise from '../../helpers/Exercise.vue';
import FormSelect from '../../helpers/forms/FormSelect.vue';
import FormInput from '../../helpers/forms/FormInput.vue';
import useCategories from '../../../composables/categories.ts';
import {computed} from 'vue';

const { filteredExercises, filter } = useExercises();
const { categories } = useCategories();

const selectOptions = computed(() => ['ALL', ...categories.value]);

const optionChanged = (e: Event) => {
  const { value } = (e?.target as HTMLSelectElement);

  if (value) {
    filter.value = value;
  }
};
</script>

<template>

  <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-5 mb-5">
    <FormInput label="Search for exercise"></FormInput>
    <FormSelect label="Type of exercise" :options="selectOptions" @change="optionChanged"></FormSelect>
  </div>

  <h2 class="text-3xl font-bold mb-5">Exercises</h2>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Exercise v-for="(ex, index) of filteredExercises" :exercise="ex" :key="index"></Exercise>
  </section>
</template>

<style scoped>

</style>