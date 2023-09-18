import { Router } from "express";
import { getRelevanceData, getRelevanceDataByYear } from "../controllers/relevanceController";

const router = Router();

router.get('/relevance', getRelevanceData);
router.get('/relevanceByYear/:year', getRelevanceDataByYear);

export default router;