import express from 'express';
import {getDataById, getExercisesData} from '../../utilities/filebase.js';
import {exercisesFilterHandler} from './exercises-handler.js';

const router = express.Router();

router.get('/', exercisesFilterHandler);

router.get('/:id', (req, res) => {
    getDataById(req, res, getExercisesData);
});

export default router;