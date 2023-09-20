import express from 'express';
import { filteredByCountry, filteredByIntensity, filteredByLikelihood, filteredByPest, filteredByRegion, filteredBySector, filteredBySource, filteredByTitle, filteredByTopic, filteredByYear, getAllData } from '../controllers/dashboardControllers.js';

//creating a router
const router = express.Router();

//api to get all the data
router.get('/all', getAllData);

// api to get data filtered by year
router.get("/year/:year", filteredByYear)

// api to get data filtered by topic
router.get("/topic/:topic", filteredByTopic)

// api to get data filtered by title
router.get("/title/:title", filteredByTitle)

// api to get data filtered by sector
router.get("/sector/:sector", filteredBySector)

// api to get data filtered by region
router.get("/region/:region", filteredByRegion)

// api to get data filtered by country
router.get("/country/:country", filteredByCountry)

// api to get data filtered by pestle
router.get("/pest/:pestle", filteredByPest)

// api to get data filtered by source
router.get("/source/:source", filteredBySource)

// api to get data filtered by intensity
router.get("/intensity/:intensity", filteredByIntensity)

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", filteredByLikelihood)


export default router;