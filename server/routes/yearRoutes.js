import { Router } from "express";
import { getYearData, getYearDataByCountry } from "../controllers/yearController.js";

const router = Router();

router.get('/', getYearData);
router.get('/byCountry/:country', getYearDataByCountry);

export default router;