import express from 'express';
import {getDataById, getWorkoutData} from '../../utilities/filebase.js';
import { successHandler } from '../../utilities/status-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    const data = getWorkoutData();
    successHandler(res, 200, data);
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getWorkoutData);
});

export default router;