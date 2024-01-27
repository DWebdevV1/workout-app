import express from 'express';
import {successHandler} from '../../utilities/status-handler.js';
import {getCategoryData} from '../../utilities/filebase.js';

const router = express.Router();

router.get('/', (req, res) => {
    successHandler(res, 200, getCategoryData());
});

export default router;