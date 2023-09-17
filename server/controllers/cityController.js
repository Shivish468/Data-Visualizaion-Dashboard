import City from '../models/City.model.js';

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCityByName = async (req, res) => {
  try {
    const { name } = req.params;
    const city = await City.findOne({ name });
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getCities,
  getCityByName,
};
