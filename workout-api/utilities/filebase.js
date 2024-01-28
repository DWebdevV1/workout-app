import fs from 'fs/promises';
import path, { dirname } from 'path';
import {fileURLToPath} from 'url';
import {errorHandler, successHandler} from './status-handler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _data = path.join(__dirname, '..', 'data', 'data.json');

export let dataJson = null;
export const getData = () => {
    return dataJson;
}

export const getDataById = (req, res, getData) => {
    const _id = Number(req.params?.id);

    if (_id && !isNaN(_id)) {
        const data = getData();
        const result = data?.find(d => d.id === _id);

        result
            ? successHandler(res, 200, result)
            : errorHandler(res, 404, 'Session not found');
    } else {
        errorHandler(res, 400, 'No valid id');
    }
}

export const getUserData = () => {
    try {
        return dataJson['users'];
    } catch {
        return [];
    }
}

export const getExercisesData = () => {
    try {
        return dataJson['exercises'];
    } catch {
        return [];
    }
}

export const getCategoryData = () => {
    try {
        return dataJson['categories'];
    } catch {
        return [];
    }
}

export const getSessionData = () => {
    try {
        return dataJson['sessions'];
    } catch {
        return [];
    }
}

export const getWorkoutData = () => {
    try {
        let data = dataJson['workouts'];
        data = data.map(d => {
            d.exercisesAmount = d.exercises?.length || 0;
            return d;
        });
        return data;
    } catch {
        return [];
    }
}

export const setUserData = async (newData) => {
    const d = getData();
    d['users'] = newData;
    await writeToDataJson(d);
}

export const setExercisesData = async (newData) => {
    const d = getData();
    d['exercises'] = newData;
    await writeToDataJson(d);
}

export const setSessionData = async (newData) => {
    const d = getData();
    d['sessions'] = newData;
    await writeToDataJson(d);
}

export const setWorkoutData = async (newData) => {
    const d = getData();
    d['workouts'] = newData;
    await writeToDataJson(d);
}

export const readFromDataJson = async () => {
    try {
        const data = await fs.readFile(_data, 'utf-8');
        dataJson = JSON.parse(data);
        console.log('Successfully read from json data file');
    } catch (e) {
        console.log('Error reading data json file', e);
        throw e;
    }
}

const writeToDataJson = async (data) => {
    try {
        await fs.writeFile(_data, JSON.stringify(data, null, 2));
        console.log('Successfully wrote to file');
    } catch (e) {
        console.log('Error writing to data json file', e);
        throw e;
    }
}