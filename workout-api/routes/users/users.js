import express from 'express';
import {getDataById, getUserData} from '../../utilities/filebase.js';
import { successHandler } from '../../utilities/status-handler.js';

const router = express.Router();

router.get('/', (req, res) => {
    successHandler(res, 200, getUserData());
});

router.get('/:id', (req, res) => {
    getDataById(req, res, getUserData);
});

export default router;