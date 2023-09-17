import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  end_year: Number,  // Assuming this is a numeric value
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,  // Assuming this is a numeric value
  impact: String,
  added: Date,  // Assuming this is a date value
  published: Date,  // Assuming this is a date value
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Region = mongoose.model('Region', regionSchema);

export default Region;