import Relevance from "../models/Relevance.model.js";

const getRelevanceData = async (req, res) => {
  try {
    const relevanceData = await Relevance.find();
    res.json(relevanceData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRelevanceDataByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const relevanceData = await Relevance.find({ year });
    res.json(relevanceData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getRelevanceData,
  getRelevanceDataByYear
};
