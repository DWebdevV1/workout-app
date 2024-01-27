import express from 'express';
import {getDataById, getExercisesData} from '../../utilities/filebase.js';
import {successHandler} from '../../utilities/status-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    let data = getExercisesData();
    const category = req.query.category?.toLowerCase();

    if (category && category !== 'all') {
        data = data.filter(d => d.category.toLowerCase() === category);
    }

    successHandler(res, 200, data);
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getExercisesData);
});

export default router;