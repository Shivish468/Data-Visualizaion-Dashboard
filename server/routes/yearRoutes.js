import { Router } from "express";
import { getYearData, getYearDataByCountry } from "../controllers/yearController";

const router = Router();

router.get('/year', getYearData);
router.get('/yearByCountry/:country', getYearDataByCountry);

export default router;