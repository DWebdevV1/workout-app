import {getSessionData, setSessionData} from '../../utilities/filebase.js';
import {errorHandler, successHandler} from '../../utilities/status-handler.js';

export const handleNewSession = (req, res) => {
    const session = req.body;

    if (session) {
        successHandler(res,201, session);
    } else {
        errorHandler(res, 500, 'Error while creating new session');
    }
}

export const handleExercisesPost = async (req, res) => {
    try {
        const sessionId = Number(req.params.sessionId);

        if (sessionId && !isNaN(sessionId)) {
            const exerciseData = req.body;
            const sessionData = getSessionData();
            const sessionIndex = sessionData?.findIndex(session => session.id === sessionId);

            if (sessionIndex !== -1) {
                const exercisesIds = sessionData[sessionIndex]?.exercises.map(e => e.id);
                if (!exercisesIds.includes(exerciseData.id)) {
                    sessionData[sessionIndex]?.exercises.push(exerciseData);
                    await setSessionData(sessionData);
                    successHandler(res, 201, sessionData[sessionIndex]);
                } else {
                    errorHandler(res, 500, 'Exercise already in Session included');
                }
            } else {
                errorHandler(res, 500, 'Error while updating session');
            }
        }
    } catch (e) {
        errorHandler(res, 404, e?.message);
    }
};