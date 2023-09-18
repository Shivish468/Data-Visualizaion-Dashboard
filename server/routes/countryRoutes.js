import { Router } from "express";
import { getCountries, getCountryByName } from "../controllers/countryController";

const router = Router();

router.get('/country', getCountries);
router.get('/countryByName/:name', getCountryByName);

export default router;