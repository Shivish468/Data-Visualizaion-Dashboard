import Topics from '../models/Topics.model.js';

const getTopics = async (req, res) => {
  try {
    const topics = await Topics.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTopicsByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const topics = await Topics.find({ region });
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getTopics,
  getTopicsByRegion,
};
