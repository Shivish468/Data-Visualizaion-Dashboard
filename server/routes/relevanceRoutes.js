import { Router } from "express";
import { getRelevanceData, getRelevanceDataByYear } from "../controllers/relevanceController.js";

const router = Router();

router.get('/', getRelevanceData);
router.get('/byYear/:year', getRelevanceDataByYear);

export default router;