import { Router } from "express";
import { getIntensities, getIntensitiesByYear } from "../controllers/intensityController";

const router = Router();

router.get('/intensity', getIntensities); 
router.get('/intensityByYear/:year', getIntensitiesByYear);

export default router;