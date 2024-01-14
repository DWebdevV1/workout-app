import express from 'express';
import {getDataById, getExercisesData} from '../utilities/filebase.js';
import {successHandler} from '../utilities/status-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    successHandler(res, 200, getExercisesData());
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getExercisesData);
});

export default router;