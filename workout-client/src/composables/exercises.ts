import {computed, onMounted, ref, watch} from 'vue';
import axios from 'axios';
import {EXERCISES_URL} from '../types/Meta.ts';

export function useExercises() {
    const exercises = ref([]);
    const exercisesCounter = ref(0);
    const filter = ref('');

    const filteredExercises = computed(() => exercises.value);

    watch(filter, async (newValue, oldValue) => {
        if (newValue !== oldValue) {
            await loadExercises(filter.value);
        }
    });

    const loadExercises = async (filter?: string) => {
        try {
            const params: { category?: string } = {};

            if (filter) {
                params.category = filter.toLowerCase();
            }

            const { data } = await axios.get(EXERCISES_URL, { params });
            exercises.value = data;
            exercisesCounter.value = exercises.value?.length || 0;
        } catch (e) {
            console.log(e);
        }
    };

    onMounted(async () => await loadExercises())

    return { filteredExercises, exercisesCounter, filter }
}

export default useExercises;