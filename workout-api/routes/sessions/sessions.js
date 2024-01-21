import express from 'express';
import {getSessionData, getDataById} from '../../utilities/filebase.js';
import {successHandler} from '../../utilities/status-handler.js';
import {handleExercisesPost, handleNewSession} from './sessions-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    successHandler(res, 200, getSessionData());
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getSessionData);
});

router.post('/', handleNewSession);

router.post('/:sessionId/exercises', handleExercisesPost);

export default router;