import { Router } from "express";
import { getCities, getCityByName } from "../controllers/cityController";

const router = Router();

router.get('/city', getCities);
router.get('/cityByName/:name', getCityByName);

export default router;