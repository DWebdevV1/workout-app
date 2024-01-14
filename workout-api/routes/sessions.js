import express from 'express';
import {getSessionData, getDataById, setSessionData} from '../utilities/filebase.js';
import {errorHandler, successHandler} from '../utilities/status-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    successHandler(res, 200, getSessionData());
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getSessionData);
});

router.post('/:sessionId/exercises', async (req, res) => {
    const sessionId = Number(req.params.sessionId);

    try {
        if (sessionId && !isNaN(sessionId)) {
            //TODO validate request body & check if exercise is already in array (don't save it then)
            const exerciseData = req.body;

            const sessionData = getSessionData();
            const sessionIndex = sessionData?.findIndex(s => s.id === sessionId);

            if (sessionIndex !== -1) {
                sessionData[sessionIndex]?.exercises.push(exerciseData);
                await setSessionData(sessionData);
                successHandler(res, 201, sessionData[sessionIndex]);
            } else {
                errorHandler(res, 500, 'Error while updating session');
            }
        }
    } catch (e) {
        errorHandler(res, 404, e?.message);
    }
});

export default router;