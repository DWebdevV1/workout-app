import {getExercisesData} from '../../utilities/filebase.js';
import {errorHandler, successHandler} from '../../utilities/status-handler.js';

export const exercisesFilterHandler = async (req, res) => {
    try {
        let data = getExercisesData();

        const category = req.query.category?.toLowerCase();
        const title = req.query.title?.toLowerCase();

        if (category && category !== 'all') {
            data = data.filter(d => d.category.toLowerCase() === category);
        }

        if (title) {
            data = data.filter(d => d.title.toLowerCase().includes(title));
        }

        successHandler(res, 200, data);
    } catch {
        errorHandler(res, 400, 'Invalid category');
    }
}