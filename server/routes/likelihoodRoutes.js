import { Router } from "express";
import { getLikelihoods, getLikelihoodsByYear } from "../controllers/likelihoodController";

const router = Router();

router.get('/likelihood', getLikelihoods);
router.get('/likelihoodByYear/:year', getLikelihoodsByYear);

export default router;