import { Router } from "express";
import { getRegionByName, getRegions } from "../controllers/regionController.js";

const router = Router();

router.get('/', getRegions);
router.get('/byName/:name', getRegionByName);

export default router;