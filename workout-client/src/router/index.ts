import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/views/Home.vue';

import ExerciseList from '../components/views/exercise/ExerciseList.vue';
import WorkoutList from '../components/views/workout/WorkoutList.vue';
import WorkoutCreate from '../components/views/workout/WorkoutCreate.vue';


const routes = [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: Home },

    { path: '/exercises', name: 'Exercises', component: ExerciseList },

    { path: '/workouts', name: 'Workouts', component: WorkoutList },
    { path: '/workouts/create', name: 'WorkoutCreate', component: WorkoutCreate },

    { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;