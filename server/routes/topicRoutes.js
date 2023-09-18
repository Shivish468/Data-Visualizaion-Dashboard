import { Router } from "express";
import { getTopics, getTopicsByRegion } from "../controllers/topicsController";

const router = Router();

router.get('/topics', getTopics);
router.get('/topicsByRegion/:region', getTopicsByRegion);

export default router;