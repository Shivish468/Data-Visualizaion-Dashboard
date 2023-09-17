import Region from '../models/Region.model.js';

const getRegions = async (req, res) => {
  try {
    const regions = await Region.find();
    res.json(regions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRegionByName = async (req, res) => {
  try {
    const { name } = req.params;
    const region = await Region.findOne({ name });
    res.json(region);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getRegions,
  getRegionByName,
};
