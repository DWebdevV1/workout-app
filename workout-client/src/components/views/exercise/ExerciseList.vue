<script setup lang="ts">
import useExercises from '../../../composables/use-exercises';
import Exercise from '../../helpers/Exercise.vue';
import FormSelect from '../../helpers/forms/FormSelect.vue';
import FormInput from '../../helpers/forms/FormInput.vue';
import useCategories from '../../../composables/use-categories';
import {computed} from 'vue';

const { filteredExercises, exercisesCounter, filterByCategory, filterByTitle } = useExercises();
const { categories } = useCategories();

const selectOptions = computed(() => ['ALL', ...categories.value]);

const onOptionChanged = (e: Event) => {
  const { value } = (e.target as HTMLSelectElement);
  filterByCategory.value = value;
};

const onInputChanged = (e: Event) => {
  const { value } = (e.target as HTMLInputElement);
  filterByTitle.value = value;
}
</script>

<template>
  <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-5 mb-5">
    <FormInput label="Search for exercise" placeholder="Exercise title" @change="onInputChanged"></FormInput>
    <FormSelect label="Type of exercise" :options="selectOptions" @change="onOptionChanged"></FormSelect>
  </div>

  <h2 class="text-3xl font-bold mb-5">Exercises ({{ exercisesCounter }})</h2>

  <section v-if="filteredExercises.length" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Exercise v-for="(ex, index) of filteredExercises" :exercise="ex" :key="index"></Exercise>
  </section>
  <section v-else class="mt-10">
    <p class="text-center italic">No Exercises found</p>
  </section>
</template>

<style scoped>

</style>