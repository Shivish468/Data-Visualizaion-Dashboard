import Year from '../models/Year.model.js'

const getYearData = async (req, res) => {
  try {
    const yearData = await Year.find();
    res.json(yearData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getYearDataByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const yearData = await Year.find({ country });
    res.json(yearData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getYearData,
  getYearDataByCountry,
};
