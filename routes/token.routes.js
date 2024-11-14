import express from 'express'
import { tokenData } from "../controller/tokenData.js";
import { getTokenDataOne } from '../controller/getTokenDataOne.controller.js';
import {getAllTokensData} from '../controller/getAllTokensData.controller.js'

const router = express.Router();

router.post('/token', tokenData)
router.get('/one-token', getTokenDataOne)
router.get('/all-tokens', getAllTokensData)

export default router;