import { Router } from "express";
import { getLikelihoods, getLikelihoodsByYear } from "../controllers/likelihoodController.js";

const router = Router();

router.get('/', getLikelihoods);
router.get('/byYear/:year', getLikelihoodsByYear);

export default router;