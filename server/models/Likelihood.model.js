import mongoose from "mongoose";

const likelihoodSchema = new mongoose.Schema({
  end_year: Number, // End year (if available)
  intensity: Number, // Intensity value
  sector: String, // Sector information
  topic: String, // Topic of the insight
  insight: String, // Insight description
  url: String, // URL associated with the insight
  region: String, // Region information
  start_year: Number, // Start year (if available)
  impact: String, // Impact description
  added: Date, // Date the entry was added
  published: Date, // Date the insight was published
  country: String, // Country information
  relevance: Number, // Relevance value
  pestle: String, // PESTLE category
  source: String, // Source of the insight
  title: String, // Title of the insight
  likelihood: Number // Likelihood value
});

const Likelihood = mongoose.model('Likelihood', likelihoodSchema);

export default Likelihood;