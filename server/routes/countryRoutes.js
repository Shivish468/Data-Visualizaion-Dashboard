import { Router } from "express";
import { getCountries, getCountryByName } from "../controllers/countryController.js";

const router = Router();

router.get('/', getCountries);
router.get('/byName/:name', getCountryByName);

export default router;