import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { readFromDataJson } from './filebase.js';

import usersRoutes from '../routes/users/users.js';
import sessionsRoutes from '../routes/sessions/sessions.js';
import exercisesRoutes from '../routes/exercises/exercises.js';
import categoriesRoutes from '../routes/categories/categories.js';
import workoutsRoutes from '../routes/workouts/workouts.js';

export const app = express();
export const port = 3000;

export const setupData = async () => await readFromDataJson();

export const setupRoutes = () => {
    app.use('/users', usersRoutes);
    app.use('/sessions', sessionsRoutes);
    app.use('/exercises', exercisesRoutes);
    app.use('/workouts', workoutsRoutes);
    app.use('/categories', categoriesRoutes);
}

export const setupApp = () => {
    app.use(cors());
    app.use(morgan('combined'));
    app.use(express.json());
}