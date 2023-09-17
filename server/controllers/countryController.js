import Country from "../models/Country.model.js";

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const country = await Country.findOne({ name });
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getCountries,
  getCountryByName,
};
