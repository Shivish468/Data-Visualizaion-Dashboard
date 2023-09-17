import Intensity from '../models/Intensity.model.js';

// Controller to get Intensity data
const getIntensities = async (req, res) => {
  try {
    const intensityData = await Intensity.find();
    res.json(intensityData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get Intensity data by year
const getIntensitiesByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const intensityData = await Intensity.find({ year });
    res.json(intensityData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getIntensities,
  getIntensitiesByYear,
};
