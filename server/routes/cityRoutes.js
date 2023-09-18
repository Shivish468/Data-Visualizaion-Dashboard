import { Router } from "express";
import { getCities, getCityByName } from "../controllers/cityController.js";

const router = Router();

router.get('/', getCities);
router.get('/byName/:name', getCityByName);

export default router;