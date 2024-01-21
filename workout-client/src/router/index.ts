import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/views/home.vue';

import ExerciseList from '../components/views/exercise/exercise-list.vue';
import WorkoutCreate from '../components/views/workout/workout-create.vue';
import UserProfile from '../components/views/user/user-profile.vue';

const routes = [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: Home },

    { path: '/workouts', name: 'Workouts', component: WorkoutCreate },
    { path: '/exercises', name: 'Exercises', component: ExerciseList },
    { path: '/user', name: 'UserProfile', component: UserProfile },

    { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;