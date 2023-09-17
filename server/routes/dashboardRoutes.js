import { Router } from 'express';
import { getIntensities, getIntensitiesByYear} from '../controllers/intensityController.js';
import { getLikelihoods, getLikelihoodsByYear} from '../controllers/likelihoodController.js';
import { getRelevanceData, getRelevanceDataByYear} from '../controllers/relevanceController.js';
import { getYearData, getYearDataByCountry} from '../controllers/yearController.js';
import { getCountries, getCountryByName} from '../controllers/countryController.js';
import { getTopics, getTopicsByRegion} from '../controllers/topicsController.js';
import { getRegions, getRegionByName} from '../controllers/regionController.js';
import { getCities, getCityByName} from '../controllers/cityController.js';

const router = Router();


// Route to get data
router.get('/intensity', getIntensities); 
router.get('/intensityByYear/:year', getIntensitiesByYear);
router.get('/likelihood', getLikelihoods);
router.get('/likelihoodByYear/:year', getLikelihoodsByYear);
router.get('/relevance', getRelevanceData);
router.get('/relevanceByYear/:year', getRelevanceDataByYear);
router.get('/year', getYearData);
router.get('/yearByCountry/:country', getYearDataByCountry);
router.get('/country', getCountries);
router.get('/countryByName/:name', getCountryByName);
router.get('/topics', getTopics);
router.get('/topicsByRegion/:region', getTopicsByRegion);
router.get('/region', getRegions);
router.get('/regionByName/:name', getRegionByName);
router.get('/city', getCities);
router.get('/cityByName/:name', getCityByName);

export default router;
