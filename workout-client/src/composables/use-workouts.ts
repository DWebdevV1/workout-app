import {onMounted, ref} from 'vue';
import axios from 'axios';
import {WORKOUTS_URL} from '../types/Meta';

export function useWorkouts() {
    const workouts = ref([]);
    const workoutsCounter = ref(0);

    const loadWorkouts = async () => {
      try {
          const { data } = await axios.get(WORKOUTS_URL);
          workouts.value = data;
          workoutsCounter.value = workouts.value?.length || 0;
      } catch (e) {
          workouts.value = [];
          console.log(e);
      }
    };

    onMounted(async () => await loadWorkouts());

    return { workouts, workoutsCounter };
}