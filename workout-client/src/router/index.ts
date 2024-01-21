import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/views/Home.vue';

import ExerciseList from '../components/views/exercise/ExerciseList.vue';
import WorkoutCreate from '../components/views/workout/WorkoutCreate.vue';
import UserSession from '../components/views/user/UserSession.vue';
import UserProfile from '../components/views/user/UserProfile.vue';

const routes = [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: Home },

    { path: '/workouts', name: 'Workouts', component: WorkoutCreate },
    { path: '/exercises', name: 'Exercises', component: ExerciseList },

    { path: '/session', name: 'UserSession', component: UserSession },
    { path: '/user', name: 'UserProfile', component: UserProfile },

    { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;