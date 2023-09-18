import { Router } from "express";
import { getIntensities, getIntensitiesByYear } from "../controllers/intensityController.js";

const router = Router();

router.get('/', getIntensities); 
router.get('/byYear/:year', getIntensitiesByYear);

export default router;