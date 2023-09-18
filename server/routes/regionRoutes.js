import { Router } from "express";
import { getRegionByName, getRegions } from "../controllers/regionController";

const router = Router();

router.get('/region', getRegions);
router.get('/regionByName/:name', getRegionByName);

export default router;