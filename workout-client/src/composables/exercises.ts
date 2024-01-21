import {onMounted, ref} from 'vue';
import axios from 'axios';

const EXERCISES_URL = import.meta.env.VITE_EXERCISES_URL;

export function useExercises() {
    const exercises = ref([]);

    const loadExercises = async () => {
        try {
            const { data } = await axios.get(EXERCISES_URL);
            exercises.value = data;
        } catch (e) {
            console.log(e);
        }
    };

    onMounted(async () => await loadExercises())

    return { exercises }
}

export default useExercises;