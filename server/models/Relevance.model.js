import mongoose from "mongoose";

const relevanceSchema = new mongoose.Schema({
  end_year: String,  // Data type may change based on actual usage
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,  // Data type may change based on actual usage
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Relevance = mongoose.model('Relevance', relevanceSchema);

export default Relevance;
