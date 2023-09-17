import Likelihood from '../models/Likelihood.model.js';

const getLikelihoods = async (req, res) => {
  try {
    const likelihoodData = await Likelihood.find();
    res.json(likelihoodData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLikelihoodsByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const likelihoodData = await Likelihood.find({ year });
    res.json(likelihoodData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getLikelihoods,
  getLikelihoodsByYear
};
