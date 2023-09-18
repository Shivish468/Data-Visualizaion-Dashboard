import { Router } from "express";
import { getTopics, getTopicsByRegion } from "../controllers/topicsController.js";

const router = Router();

router.get('/', getTopics);
router.get('/byRegion/:region', getTopicsByRegion);

export default router;