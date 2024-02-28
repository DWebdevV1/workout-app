import {computed, onMounted, ref, watch} from 'vue';
import axios from 'axios';
import {EXERCISES_URL} from '../types/Meta';
import {ExerciseFilter} from '../types/Exercise';

export function useExercises() {
    const exercises = ref([]);
    const exercisesCounter = ref(0);

    const filterByCategory = ref('');
    const filterByTitle = ref('');

    const filteredExercises = computed(() => exercises.value);

    watch(filterByCategory, async (newValue, oldValue) => {
        if (newValue !== oldValue) {
            await loadExercises({ category: filterByCategory.value });
        }
    });

    watch(filterByTitle, async (newValue, oldValue) => {
       if (newValue !== oldValue) {
           await loadExercises({ title: filterByTitle.value });
       }
    });

    const loadExercises = async (filter?: ExerciseFilter) => {
        try {
            const categoryFilter = filter?.category?.toLowerCase() || filterByCategory.value;
            const titleFilter = filter?.title?.toLowerCase() || filterByTitle.value;

            const params: ExerciseFilter = {};

            if (categoryFilter) {
                params.category = categoryFilter;
            }

            if (titleFilter) {
                params.title = titleFilter;
            }

            const { data } = await axios.get(EXERCISES_URL, { params });
            exercises.value = data;
            exercisesCounter.value = exercises.value?.length || 0;
        } catch (e) {
            exercises.value = [];
            console.log(e);
        }
    };

    onMounted(async () => await loadExercises())

    return { filteredExercises, exercisesCounter, filterByCategory, filterByTitle }
}

export default useExercises;